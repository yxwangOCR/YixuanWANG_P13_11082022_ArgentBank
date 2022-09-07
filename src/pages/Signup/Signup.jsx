import React, { useState } from "react";
import TextInput from "../../components/TextInput/TextInput";
import "./Signup.css";
import Button from "../../components/Button/Button";

function Signup() {
  const [success, setSuccess] = useState(false);
  const handleSumbit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };
  return (
    <main className="sign-up-page-container">
      {success ? (
        <section>
          <h1>Success!</h1>
        </section>
      ) : (
        <>
          <h1>Create an Account</h1>
          <form onSubmit={handleSumbit}>
            <TextInput label="Firstname" inputProps={{ type: "text" }} />
            <TextInput label="Lastname" inputProps={{ type: "text" }} />
            <TextInput label="Email" inputProps={{ type: "text" }} />
            <TextInput label="Password" inputProps={{ type: "password" }} />
            <Button>Create Account</Button>
          </form>
        </>
      )}
    </main>
  );
}

export default Signup;
