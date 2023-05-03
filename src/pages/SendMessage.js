import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import styles from "./Login.module.scss";
import LoginService from "../services/Login";

function SendmessagePage() {
  const [messageSend, setMessageSend] = useState("");
  const [sendTo, setSendTo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(messageSend, sendTo, "Send");
  };
  return (
    <div className={`${styles["login-page"]}`}>
      <div className={`${styles["login-container"]}`}>
        <Form.Label>Send Message To</Form.Label>
        <Form.Control
          type="text"
          className={`${styles["login-text-box"]}`}
          onChange={(e) => setMessageSend(e.target.value)}
        />
        <Form.Label>Message Content</Form.Label>
        <Form.Control
          type="text"
          className={`${styles["login-text-box"]}`}
          onChange={(e) => setSendTo(e.target.value)}
        />
        <Button
          variant="dark"
          className={`${styles["login-button"]}`}
          onClick={handleSubmit}
        >
          Send
        </Button>
      </div>
    </div>
  );
}

export default SendmessagePage;
