import React, { useEffect, useState } from 'react';import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import services from './services';
import UserCards from './components/UserCards';
import UserDetails from './components/UserDetails';


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
      <Router>
        <Routes>
          <Route path="/:id" element={<UserDetails/>}/>
          <Route path="/" element={<UserCards users={users}/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
