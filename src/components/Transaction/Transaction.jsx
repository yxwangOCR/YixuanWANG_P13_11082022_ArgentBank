import React from "react";
import "./Transaction.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function Transaction(props) {
  const navigate = useNavigate();

  const getTransactionPage = () => {
    navigate("/transaction");
  };
  return (
    <section className="account-container">
      <div className="account-content">
        <h3 className="account-title" id="account-title">
          {props.bank}
        </h3>
        <p className="account-amount">{"$" + props.amount}</p>
        <p className="account-description">{props.description}</p>
      </div>
      <div className="account-content cta">
        <Button className="transaction-button" onClick={getTransactionPage}>
          View transactions
        </Button>
      </div>
    </section>
  );
}

export default Transaction;
