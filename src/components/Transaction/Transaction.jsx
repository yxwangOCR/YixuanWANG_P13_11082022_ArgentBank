import React from 'react';
import "./Transaction.css";

function Transaction(props) {
  return (
    <section className="account-container">
    <div className="account-content">
       <h3 className="account-title">{props.title}</h3>
       <p className="account-amount">{'$' + props.amount}</p>
       <p className="account-description">{props.description}</p>
    </div>
    <div className="account-content cta">
       <button className="transaction-button">View transactions</button>
    </div>
 </section>
  )
}

export default Transaction