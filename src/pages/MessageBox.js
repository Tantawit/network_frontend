import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import styles from "./MessageBox.module.scss";
import LoginService from "../services/Login";

function MessageBoxPage() {
  const [messageGet, setMessageGet] = useState("No message.");

  return (
    <div className={`${styles["message-page"]}`}>
      <div className={`${styles["message-container"]}`}>
        <Form.Label>Message Box</Form.Label>
        <textarea readOnly className={`${styles["message-area"]}`}>
          {messageGet}
        </textarea>
      </div>
    </div>
  );
}

export default MessageBoxPage;
