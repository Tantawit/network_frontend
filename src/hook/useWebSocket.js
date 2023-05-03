import { useRef, useState } from "react";
import useTimeout from "./useTimeout";

export const useStepWebSocket = ({ wsURL }) => {
  const MAX_RECONNECT_ATTEMPTS = 5;
  const [connectionState, setConnectionState] = useState("uninstantiated");
  const [reconnectAttempt, setReconnectAttempt] = useState(0);
  const connectRef = useRef(false);
  const [setConnectionTimeout, stopConnectionTimeout] = useTimeout();
  const websocket = useRef(null);
  const initializingRef = useRef(false);
  const username = localStorage.getItem("username");
  const message = [];

  const initWebsocket = () => {
    if (initializingRef.current) {
      return;
    }

    console.debug(`${new Date()} init connection`);

    initializingRef.current = true;
    const ws = new WebSocket(wsURL);
    websocket.current = ws;

    ws.onopen = async (event) => {
      connectRef.current = true;
      setConnectionTimeout(
        setTimeout(() => {
          console.info("Connection timeout");
          reconnect();
        }, 30000)
      );

      const loginMessage = {
        username,
      };

      setConnectionState("connecting");
      console.info("Connecting to server");
      console.debug("Sending token and version", loginMessage);
      ws.send(JSON.stringify(loginMessage));
    };

    ws.onmessage = async (event) => {
      try {
        const data = JSON.parse(event.data);
        switch (data.type) {
          case undefined:
            if (data.connect_success) {
              console.info("Successfully connected to server");
              setReconnectAttempt(0);
              stopConnectionTimeout();
              setConnectionState("connected");
            }
            return;
          case 4:
            console.debug(`receive message ${data.message}`);
            message.push(data.message);
            break;
          case 5:
            console.error(data);
            break;
          default:
            console.error(data);
        }
        setConnectionState("error");
        console.error("Error connecting to websocket", data.error);
      } catch (error) {
        console.error("Error parsing JSON message", error);
        setConnectionState("error");
      }
    };

    ws.onerror = (event) => {
      setConnectionState("error");
    };

    ws.onclose = (event) => {
      console.info(`Websocket disconnected at ${wsURL}`);

      if (event.wasClean) {
        setConnectionState("disconnected");
        initializingRef.current = false;
        return;
      }

      console.error(`Error at code ${event.code}`);
      // not close by unmount component
      if (websocket.current && event.code !== 1006) {
        reconnect();
      }

      initializingRef.current = false;
    };
  };

  const reconnect = () => {
    if (reconnectAttempt > MAX_RECONNECT_ATTEMPTS) {
      console.info("Reconnect attempts exceeded, stop retrying");
      setConnectionState("stop-retry");
      return;
    }

    initializingRef.current = false;
    console.info("Reconnecting...");
    setConnectionState("reconnecting");

    setReconnectAttempt(reconnectAttempt + 1);
    initWebsocket();
  };

  const sendJsonMessage = (msg) => {
    websocket.current?.send(JSON.stringify(msg));
  };

  const getWebSocket = () => {
    return websocket.current;
  };

  return {
    connectionState,
    sendJsonMessage,
    getWebSocket,
    initWebsocket,
  };
};
