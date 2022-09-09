import React from "react";
import { default as ProfileComponent } from "../../components/Profile/Profile";
import Transaction from "../../components/Transaction/Transaction";
import Account from "../../data/account.json";
import "./Profile.css";

function Profile() {
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
