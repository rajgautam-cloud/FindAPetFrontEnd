import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/HomePage/Homepage";
import { Route, Routes } from "react-router-dom";
import LogInPage from "./pages/LoginPage/LogInPage.";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />,
        <Route path="/login" element={<LogInPage />} />
      </Routes>
    </div>
  );
}

export default App;
