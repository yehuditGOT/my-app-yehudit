import { useContext, useState } from "react";
import MyContex from "../Contexts/Contexts";
const Register = () => {
    const { register } = useContext(MyContex); // שולף את הפונקציה register מתוך הקונטקסט
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const onRegister = () => {    
        const user = { id:0,name, email, password };
        
            register(user); // שולח את אובייקט המשתמש
        

    };
    return (
        <div>
            <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br />
            <input type="name" placeholder="הכנס שם" onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="הכנס מייל" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="הכנס סיסמא" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={onRegister}>רשום</button>
        </div>
    );
}

export default Register;
