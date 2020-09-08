import React, { useState } from 'react';

const Create = (props) => {
  const [list, setList] = useState('');
  const [datePurchase, setDatePurchase] = useState('mm/dd/yyyy');
  const [store, setStore] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  return (
    <div>
      <h1>Create List</h1>
      <form>
        <label htmlFor="list">List:</label>
        <textarea
          name="list"
          type="text"
          value={list}
          onChange={(event) => setList(event.target.value)}
        />
        <label htmlFor="datepurchase">Date Purchased:</label>
        <input
          name="datepurchase"
          type="text"
          value={datePurchase}
          onChange={(event) => setDatePurchase(event.target.value)}
        />
        <label htmlFor="store">Store:</label>
        <input
          name="store"
          type="text"
          value={store}
          onChange={(event) => setStore(event.target.value)}
        />
        <label htmlFor="totalamount">Total Amount:</label>
        <input
          name="totalamount"
          type="text"
          value={totalAmount}
          onChange={(event) => setTotalAmount(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;