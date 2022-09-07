import React from "react";
import { default as ProfileComponent } from "../../components/Profile/Profile";
import Transaction from "../../components/Transaction/Transaction";
import Account from "../../data/account.json";

function Profile() {
  return (
      <div>
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
      </div>
  )
}

export default Profile;
