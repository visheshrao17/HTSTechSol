import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    
        if (email.trim() === "") {
            setMessage("Please enter your email.");
            return false;
        }
    
        if (!email.includes("@")) {
            setMessage("An email address must contain '@'.");
            return false;
        }
    
        if (!email.includes(".")) {
            setMessage("An email address must contain a domain (e.g., '.com').");
            return false;
        }
    
        if (!emailRegex.test(email)) {
            setMessage("Enter a valid email address (e.g., user@example.com).");
            return false;
        }
    
        if (email.length > 254) {
            setMessage("Email address is too long.");
            return false;
        }
    
        if (email.startsWith("@") || email.endsWith("@") || email.endsWith(".")) {
            setMessage("Email address cannot start or end with special characters.");
            return false;
        }
    
        setMessage(""); 
        return true;
    }
    

    function isValidPassword(pass) {
        const minLength = 8; 
        const upperCaseRegex = /[A-Z]/; 
        const lowerCaseRegex = /[a-z]/; 
        const numberRegex = /[0-9]/; 
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    
        if (pass.trim() === "") {
            setMessage("Please enter your password.");
            return false;
        }
    
        if (pass.length < minLength) {
            setMessage(`Password should be at least ${minLength} characters long.`);
            return false;
        }
    
        if (!upperCaseRegex.test(pass)) {
            setMessage("Password should contain at least one uppercase letter.");
            return false;
        }
    
        if (!lowerCaseRegex.test(pass)) {
            setMessage("Password should contain at least one lowercase letter.");
            return false;
        }
    
        if (!numberRegex.test(pass)) {
            setMessage("Password should contain at least one number.");
            return false;
        }
    
        if (!specialCharRegex.test(pass)) {
            setMessage("Password should contain at least one special character (e.g., !, @, #, etc.).");
            return false;
        }
    
        setMessage(""); 
        return true;
    }
    

    function submit() {
        if (isValidEmail(email) && isValidPassword(password)) {
            setMessage(""); 
            navigate("/login", { state: { email, password } }); 
        }
    }

    return (
        <>
    <div className="login-container">
        <div className="login-form">
            <h2 className="login-header">Login</h2>
            <div className="form-group">
                <label htmlFor="email" className="form-label">Email:</label>
                <input 
                    id="email"
                    type="email" 
                    placeholder="Enter your email" 
                    value={email} 
                    className="form-input"
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            <div className="form-group">
                <label htmlFor="password" className="form-label">Password:</label>
                <input 
                    id="password"
                    type="password" 
                    placeholder="Enter your password" 
                    value={password} 
                    className="form-input"
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            <div className="form-group">
                <button className="login-button" onClick={submit}>Login</button>
            </div>
            {message && <div className="message">{message}</div>}
        </div>
    </div>
</>

    );
}

export default Login;
