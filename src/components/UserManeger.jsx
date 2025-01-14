import { useContext } from "react";
import MyContex from "../Contexts/Contexts";

const UserManeger=()=>{
    const {users}=useContext(MyContex)
    return <>
    <ul>
        <br /><br /><br /><br /><br />
        {users && users.map(u=><li>name:{u.name}|email:{u.email}|role:{u.role}</li>)}
    </ul>
    </>
}
export default UserManeger;