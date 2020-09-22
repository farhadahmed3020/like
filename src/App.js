import React, { useEffect } from 'react';
import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useState } from 'react';

function App() {
  const [likeColor, setLikeColor ] = useState('');
   const  handleLike = () =>{
    const color = likeColor ? '' : 'primary';
     setLikeColor(color);
     setLikeColor(likeColor ? '' : 'primary');
   }
   const [users, setUsers] = useState([]);
   const [singleUser,setSingleUser] =useState({});

   useEffect(() =>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data => setUsers(data))
   },[])
    // single users
    useEffect(() =>{
      fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data =>setSingleUser(data))
    },[])
  return (
    <div>
      
      <AccessAlarmIcon></AccessAlarmIcon>
      <ThumbUpAltIcon onClick={handleLike} color={likeColor}
      ></ThumbUpAltIcon>
      <ThumbUpAltIcon onClick={() =>setLikeColor(likeColor ? '' : 'primary')} color ={likeColor}></ThumbUpAltIcon>
      
      {
        users.map(users => <li>{users.name}</li>)
      }
      <h1> {singleUser.name}</h1>
    
      
    </div>
  );
}

export default App;
