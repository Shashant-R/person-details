import Topbar from './components/Topbar'
import './App.css';
import Hero from './components/Hero';
import {Card} from './components/Card';
import { useEffect, useState } from 'react';

export default function App() {
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState();
    
  const getUsers = async () => {
      const response = await fetch('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20');
      let temp = await response.json();
      setUsers(temp.results);
      setActiveUser(temp.results[0])
  }

  useEffect(()=>{
      getUsers();
  }, []);

  
  const handleClick = (id) =>
  {
    console.log(users[id].name.first, "selected");
    setActiveUser(users[id]);
  }

  return (
    
    <div className="App" >
      <Topbar/>
      <Hero user = {activeUser}/>
      <Card users = {users} handleClick={handleClick} isActive={activeUser}/>
    </div>
    
  );
}

