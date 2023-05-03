import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import styles from "./Login.module.scss";
import LoginService from "../services/Login";

function LoginPage() {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    LoginService.login(username);
    console.log(username, "Submit");
  };
  return (
    <div className={`${styles["login-page"]}`}>
      <div className={`${styles["login-container"]}`}>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          className={`${styles["login-text-box"]}`}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button
          variant="dark"
          className={`${styles["login-button"]}`}
          onClick={handleSubmit}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;
