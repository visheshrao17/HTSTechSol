import Login from "./components/login";
import Profile from "./components/profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;


