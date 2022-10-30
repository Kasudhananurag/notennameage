import { useState } from 'react';
import './App.css';
import AddUsers from './components/Users/AddUsers';
import UsersList from "./components/Users/UsersList";

function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uname,uage) =>{
    setUsersList( (prevUserList) =>{
      return[...prevUserList,{name: uname, age:uage, id: Math.random().toString()}];
    } )
  };

  return (
    <>
      <div>
        <AddUsers  onAddUser = {addUserHandler} />
        <UsersList users = {usersList} />
      </div>
    </>
  );
}

export default App;
