import React from 'react';
import { Link } from 'react-router-dom';

const Buttons = () => {
  return (
    <div className="buttons">
      <Link to="/create">
        <button>Create List</button>
      </Link>
      <Link to="/archive">
        <button>Archive</button>
      </Link>
    </div>
  );
};

export default Buttons;