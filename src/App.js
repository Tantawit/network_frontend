import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import LoginPage from "./pages/Login";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <LoginPage />
    </div>
  );
}

export default App;
