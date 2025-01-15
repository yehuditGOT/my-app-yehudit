import { useContext, useState } from "react";
import MyContex from "../Contexts/Contexts";
import './Register.css';
const Register = () => {
    const { register } = useContext(MyContex); // Extracts the register function from context
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    
    const onRegister = () => {    
        const user = { id: 0, name, email, password };
        register(user); // Sends the user object
    };
    
    return (
        <div className="register-container">
            <h2 className="register-title">Register</h2>
            <input 
                type="text" 
                placeholder="Enter your name" 
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                type="email" 
                placeholder="Enter your email" 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Enter your password" 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={onRegister}>Sign Up</button>
        </div>
    );
};

export default Register;
