import React from 'react';
import { Link } from 'react-router-dom';

const Buttons = () => {
  return (
    <div className="buttons">
      <Link to="/create">
        <button className="home-button">CREATE LIST</button>
      </Link>
      <Link to="/archive">
        <button className="home-button">ARCHIVE</button>
      </Link>
    </div>
  );
};

export default Buttons;