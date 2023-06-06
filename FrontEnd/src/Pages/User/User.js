import React from "react"
import "../../Pages/main.css";
import EditName from "../../Components/EditName/EditName";
import Account from "../../Components/Account/Account";
import  {useSelector} from "react-redux";
import { Navigate } from "react-router-dom";
const Accounts = [
  {
    id: 1,
    title: "Argent Bank Checking (x8349)",
    amount: "$2,082.79",
    description: "Available Balance",
  },
  {
    id: 2,
    title: "Argent Bank Savings (x6712)",
    amount: "$10,928.42",
    description: "Available Balance",
  },
  {
    id: 3,
    title: "Argent Bank Credit Card (x8349)",
    amount: "$184.30",
    description: "Current Balance",
  },
];
function User() {
  const token = useSelector((state) => state.user.token);
  if (!token) {
    return  (<Navigate to="/sign-in"></Navigate>)
  }
      return(
      <div className="main bg-dark">
        <EditName />
        {Accounts.map(account =>
          <Account key={account.id} title={account.title} amount={account.amount} description={account.description} />
        )}
      </div>
      )
}
      export default User;

