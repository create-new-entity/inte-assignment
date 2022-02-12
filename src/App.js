import React, { useEffect, useState } from 'react';

import services from './services';
import UserCards from './components/UserCards';


const App = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const newUsers = await services.getAllUsers();
      // console.log(newUsers);
      setUsers(newUsers);
    })();
  }, []);



  return (
    <>
      <UserCards users={users}/>
    </>
  );
};

export default App;
