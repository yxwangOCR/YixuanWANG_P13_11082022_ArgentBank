import React, { useState } from "react";
import "./DropDown.css";
import Button from "../Button/Button";

function DropDown({ date, description, amount, balance }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(!open);

  return (
    <section className="detail-list">
      <div className="detail-list-content">
        <div>{date}</div>
        <div>{description}</div>
        <div>{amount}</div>
        <div>{balance}</div>
        <Button onClick={close}>Open</Button>
      </div>
    </section>
  );
}

export default DropDown;
