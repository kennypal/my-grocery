import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Archive = () => {
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {

    const apiCall = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/grocery?Grid%20View`
      const response = await axios.get(airtableURL, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      console.log(response.data.records)
      // setGroceries(response.data.records)
    }
    apiCall()
  }, []);
  return (
    <div>
      <h1>Archive</h1>
    </div>
  );
};

export default Archive;