import React from 'react';

const Create = () => {
  return (
    <div>
      <h1>Create List</h1>
      <form>
        <label htmlFor="list">List:</label>
        <textarea name="list" type="text"/>
        <label htmlFor="datepurchase">Date Purchased:</label>
        <input name="datepurchase" type="text"/>
        <label htmlFor="store">Store:</label>
        <input name="store" type="text" />
        <label htmlFor="totalamount">Total Amount:</label>
        <input name="totalmount" type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;