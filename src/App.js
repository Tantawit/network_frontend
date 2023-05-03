import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import LoginPage from "./pages/Login";
import SendmessagePage from "./pages/SendMessage";
import MessageBoxPage from "./pages/MessageBox";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <LoginPage />
      <SendmessagePage />
      <MessageBoxPage />
    </div>
  );
}

export default App;
