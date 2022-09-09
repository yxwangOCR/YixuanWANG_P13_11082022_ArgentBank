import React from "react";
import "./Amount.css";

function Amount({ bank, amount, description }) {
  return (
    <div className="total-amount">
      <h4>{(bank = "Argent Bank Savings (x6712)")}</h4>
      <h2>{(amount = "$2.082.79")}</h2>
      <h4>{(description = "Available Balance")}</h4>
    </div>
  );
}

export default Amount;
