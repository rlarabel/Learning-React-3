import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import ListUsers from './components/Users/ListUsers';

function App() {
  const [usersList, setUsersList] = useState([]);
  
  const addUserHandler = (uName, uAge) => {
    //Appends data to the end of a list
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {id: Math.random().toString(), name: uName, age: uAge}];
    });
  };

  return (
    <>
        <AddUser onAddUser={addUserHandler} />
        <ListUsers users={usersList} />
    </>
  );
}

export default App;
