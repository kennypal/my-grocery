import React, { useState } from 'react';
import axios from 'axios';

const Create = (props) => {
  const [list, setList] = useState('');
  const [datePurchase, setDatePurchase] = useState('mm/dd/yyyy');
  const [store, setStore] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = {
      list,
      datePurchase,
      store,
      totalAmount
    };

    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/grocery`;
    await axios.post(airtableURL, { fields }, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        'Content-Type': 'application/json'
      }
    })
    setList('')
    setDatePurchase('mm/dd/yyyy')
    setStore('')
    setTotalAmount('')
  }

  return (
    <div>
      <h1>Create List</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="list">List:</label>
        <textarea
          name="list"
          type="text"
          value={list}
          onChange={(event) => setList(event.target.value)}
        />
        <label htmlFor="datePurchase">Date Purchased:</label>
        <input
          name="datePurchase"
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
        <label htmlFor="totalAmount">Total Amount:</label>
        <input
          name="totalAmount"
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