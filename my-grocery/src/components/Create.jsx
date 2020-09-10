import React, { useState } from 'react';
import axios from 'axios';
import Form from "./Form"

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
      <h1>My List</h1>
      <Form
        handleSubmit={handleSubmit}
        list={list}
        setList={setList}
        datePurchase={datePurchase}
        setDatePurchase={setDatePurchase}
        store={store}
        setStore={setStore}
        totalAmount={totalAmount}
        setTotalAmount={setTotalAmount}
      />
    </div>
  );
};

export default Create;