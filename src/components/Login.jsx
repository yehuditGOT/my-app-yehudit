import { useContext, useState } from "react"
import MyContex from "../Contexts/Contexts";

const Login=()=> {
    const loginFunc = useContext(MyContex).login;
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const onLogin=()=>{
        loginFunc(email,password)
     }
    return<>
    <div>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br />

        <input type="email"placeholder="הכנס מייל"onChange={e=>{setEmail(e.target.value) }} />
        <input type="password" placeholder="הכנס סיסמא"onChange={e=>{setPassword(e.target.value) }} />
        <button onClick={onLogin}>log in</button>
    </div>
    </> 

}
export default Login;
