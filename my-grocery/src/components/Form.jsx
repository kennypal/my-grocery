import React from 'react';

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="list">List:</label>
        <textarea
          name="list"
          type="text"
          value={props.list}
          onChange={(event) => props.setList(event.target.value)}
        />
        <label htmlFor="datePurchase">Date Purchased:</label>
        <input
          name="datePurchase"
          type="text"
          value={props.datePurchase}
          onChange={(event) => props.setDatePurchase(event.target.value)}
        />
        <label htmlFor="store">Store:</label>
        <input
          name="store"
          type="text"
          value={props.store}
          onChange={(event) => props.setStore(event.target.value)}
        />
        <label htmlFor="totalAmount">Total Amount:</label>
        <input
          name="totalAmount"
          type="text"
          value={props.totalAmount}
          onChange={(event) => props.setTotalAmount(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;