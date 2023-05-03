import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";
import FerlunLogo from "../images/ferlun-logo.png";
import styles from "./NavigationBar.module.scss";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={FerlunLogo}
                className={`${styles["logo"]}`}
                alt="page logo, cat-man sleeping on huge cat"
              />
            </Link>
          </Navbar.Brand>
          <a className={`${styles["project-name"]}`}>Network Group 35</a>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
