import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import "./Transaction.css";
import { useNavigate } from "react-router-dom";
import DropDown from "../../components/DropDown/DropDown";
import Details from "../../data/transaction.json";
import Amount from "../../components/Amount/Amount";

function Transaction() {
  const navigate = useNavigate();

  const getBack = () => {
    navigate("/profile");
  };
  return (
    <main className="transaction-page-container">
      <div className="back-link" onClick={getBack}>
        <RiArrowGoBackFill className="back-arrow-icon" />
        <span>Back to Profile</span>
      </div>

      <Amount />
      <div className="detail-list-title">
        <span>DATE</span>
        <span>DESCRIPTION</span>
        <span>AMOUNT</span>
        <span>BALANCE</span>
      </div>
      <div className="details-list">
        {Details.map((detail) => {
          return (
            <DropDown
              key={detail.id}
              date={detail.date}
              description={detail.description}
              amount={detail.amount}
              balance={detail.balance}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Transaction;
