import React from "react"

function Account({title,amount,description}){
    return (
        <>
   <h2 className="sr-only">Accounts</h2>
      <div className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </div>
      </>
)}
export default Account;