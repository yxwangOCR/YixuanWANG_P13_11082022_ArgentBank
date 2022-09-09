import React, { useState } from "react";
import "./DropDown.css";
import Button from "../Button/Button";
import { BsFillPencilFill } from "react-icons/bs";
import TextInput from "../TextInput/TextInput";

function DropDown({ date, description, amount, balance, type, category }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(!open);

  const [pencil, setPencil] = useState(false);

  const [note, setNote] = useState({
    value: "",
    show: "",
  });

  const handleChange = (e) => {
    setNote({ value: e.target.value });
  };

  const submit = () => {
    setNote({ show: note.value });
  };

  return (
    <section className="detail-list">
      <div className="detail-list-content">
        <div>{date}</div>
        <div>{description}</div>
        <div>{amount}</div>
        <div>{balance}</div>
        <Button onClick={close}>{!open ? "Open" : "Close"}</Button>
      </div>

      {open ? (
        <div className="sub-detail-list">
          <div>Transaction Type: {type}</div>
          <div>Category: {category}</div>
          <div>
            Note: <BsFillPencilFill onClick={setPencil} />
            <div>{note.show}</div>
            {pencil ? (
              <form onSubmit={() => submit()}>
                <TextInput
                  type="text"
                  value={note.value}
                  onChange={(e) => handleChange(e)}
                />
                <Button type="submit"> Submit </Button>
              </form>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default DropDown;
