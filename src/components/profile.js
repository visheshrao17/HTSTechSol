import { useLocation } from "react-router-dom";
import "./profile.css"
function Profile() {
    const location = useLocation();
    const { email, password } = location.state || { email: "N/A", password: "N/A" }; 

    return (
        <div className="profile-container">
            <div className="profile-card">
                <h1 className="profile-header">Welcome to Your Profile!</h1>
                <p className="profile-detail"><strong>Email:</strong> {email}</p>
                <p className="profile-detail"><strong>Password:</strong> {password}</p>
            </div>
        </div>

    );
}

export default Profile;
