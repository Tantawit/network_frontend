import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import LoginPage from "./pages/Login";
import SendmessagePage from "./pages/SendMessage";
import MessageBoxPage from "./pages/MessageBox";
import { useStepWebSocket as useWebSocket } from "./hook/useWebSocket";
import { useEffect } from "react";

function App() {
  const {
    initWebsocket,
    getWebSocket,
    sendJsonMessage,
    messageList,
    connectionState,
  } = useWebSocket("wss://chat.samithiwat.dev/v1/chat/ws");

  useEffect(() => {
    if (!getWebSocket() && connectionState === "uninstantiated") {
      initWebsocket();
    }

    return () => {
      if (getWebSocket()) {
        getWebSocket()?.close();
      }
    };
  }, []);
  return (
    <div className="App">
      <NavigationBar />
      <LoginPage />
      <SendmessagePage sendJsonMessage={sendJsonMessage} />
      <MessageBoxPage messageList={messageList} />
    </div>
  );
}

export default App;
