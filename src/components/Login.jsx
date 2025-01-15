import { useContext, useState } from "react";
import MyContex from "../Contexts/Contexts";
import "./Login.css"; // CSS file for styling
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const loginFunc = useContext(MyContex).login;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const onLogin = () => {
        loginFunc(email, password);
        navigate('/HomePage');
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <input
                type="email"
                placeholder="Enter your email"
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Enter your password"
                onChange={e => setPassword(e.target.value)}
            />
            <button onClick={onLogin}>Log In</button>
        </div>
    );
};

export default Login;
