import React from "react";
import { default as ProfileComponent } from "../../components/Profile/Profile";
import Transaction from "../../components/Transaction/Transaction";
import Account from "../../data/account.json";
import "./Profile.css";
import { useSelector } from "react-redux";
import { selectToken } from "../../app/authSlice";
import { Navigate } from "react-router-dom";

function Profile() {
  const isLogged = !!useSelector(selectToken);
  console.log(isLogged);
  if (!isLogged) {
    console.log("ERRTFYGYUHIJK");
    return <Navigate to="/" replace />;
  }
  return (
    <main className="profile-page-container">
      <ProfileComponent />
      {Account.map((account) => {
        return (
          <Transaction
            key={account.id}
            bank={account.bank}
            amount={account.amount}
            description={account.description}
          />
        );
      })}
    </main>
  );
}

export default Profile;
