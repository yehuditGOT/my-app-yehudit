import { useContext } from "react";
import MyContex from "../Contexts/Contexts";
import './UserManeger.css';


const UserManeger=()=>{
    const {users}=useContext(MyContex)
    return <>
    
    <ul className="user-manager">
        <br /><br /><br /><br /><br />
        {users && users.map(u=><li>name:  {u.name}  |  email:  {u.email}  |  role:  {u.role}</li>)}
    </ul>
    </>

}
export default UserManeger;
