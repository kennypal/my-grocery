import React from 'react';
import Archive from './Archive'
import Create from './Create'

const Home = () => {
  return (
    <div>
      <header>
        <h1>Home</h1>
      </header>
      <Create />
      <Archive />
    </div>
  );
};

export default Home;