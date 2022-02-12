import React, { useEffect } from 'react';

import services from './services';

const App = () => {

  useEffect(() => {
    (async () => {
      const users = await services.getAllUsers();
      console.log(users);
    })();
  }, []);

  return (
    <h1>Moron</h1>
  );
};

export default App;
