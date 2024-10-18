import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/signup-page";
import Login from "./components/login-page";
import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/login-page" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
