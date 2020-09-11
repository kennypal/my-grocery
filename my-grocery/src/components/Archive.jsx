import React, { useEffect, useState } from "react";
import axios from "axios";

const Archive = (props) => {
  const [groceries, setGroceries] = useState([]);

  // Function that makes the axios call to get information from Airtable

  useEffect(() => {
    const apiCall = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/grocery?Grid%20View`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });

      // After the call, I set groceries to the current data in Airtable

      setGroceries(response.data.records);
    };
    apiCall();
  }, []);

  // This is to sort data by date

  groceries.sort((a, b) => new Date(b.fields.datePurchase) - new Date(a.fields.datePurchase))
  
  return (
    <div className="archive">
      <h1>Archive</h1>
      <div className="list-container">
        {/* Since data is an array, I used the map function to render data to the DOM */}
        {groceries.map((grocery, idx) => (
          <div className="background" key={grocery.id}>
            <div className="list">
              <div className="item-list">
                <h3>DATE PURCHASE: {grocery.fields.datePurchase}</h3>
                {/* The list field in Airtable is a string and I wanted to itemize the list. */}
                {/* So I converted the string to an array using the split method and then map */}
                {/* through it. */}
                <h3>ITEMS:</h3>
                  {grocery.fields.list.split("\n").map((item, idx) => (
                    <div className="item" key={idx}>{item}</div>
                  ))}
                <h3>STORE: {grocery.fields.store}</h3>
                <h2>TOTAL AMOUNT: ${grocery.fields.totalAmount}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Archive;
