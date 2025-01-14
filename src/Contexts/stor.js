import { useState } from "react";
export const CreateStor = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Yehudit", email: "y@gmail.com", password: "y1234",role:"maneger" },
    { id: 2, name: "Hadass", email: "h@gmail.com", password: "h1234",role:"user" },
    { id: 3, name: "Yael", email: "i@gmail.com", password: "i1234" ,role:"user"}
  ]);

  const [currentUser, setCurrentUser] = useState(null);

  const stor = {
    users,
    currentUser,
    login: (email, password) => {
      const user = users.find((u) => u.email === email && u.password === password);
      if (!user) {
        alert("אחד הפרטים שגויים");
      } else {
        setCurrentUser(user);
        alert(user.name + " ברוך הבא");
      }
    },
    register: (newUser) => {
      if (users.some((u) => u.email === newUser.email)) {
        alert("המייל קיים כבר");
      }
       else {
        newUser.id = users[users.length - 1].id + 1;
        setUsers([...users, newUser]);
        setCurrentUser(newUser);
        alert(newUser.name + " התחבר בהצלחה");
      }
    },
    logOut:()=>{
      setCurrentUser(null);
    }
  };
  return stor;
};
