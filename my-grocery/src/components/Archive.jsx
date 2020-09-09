import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Archive = (props) => {
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {

    const apiCall = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/grocery?Grid%20View`
      const response = await axios.get(airtableURL, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setGroceries(response.data.records)
    }
    apiCall()
  }, []);
  return (
    <div>
      <h1>Archive</h1>
      <div className="list-container">
      {groceries.map((grocery, idx) => (
          <div className="list">
            <h3 key={idx}>{grocery.fields.datePurchase}</h3>
            <h3 key={idx}>{grocery.fields.list}</h3>
            <h3 key={idx}>{grocery.fields.store}</h3>
            <h3 key={idx} style={{ backgroundColor: 'lightblue' }}>${grocery.fields.totalAmount}</h3>
          </div>
      ))}
      </div>
    </div>
  );
};

export default Archive;