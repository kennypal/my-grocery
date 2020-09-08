import React from 'react';
import { Link } from 'react-router-dom';

const Buttons = () => {
  return (
    <div>
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