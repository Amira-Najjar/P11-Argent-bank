import React, { useState } from "react";
import "../../Pages/main.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { updateUserName, setFirstName, setLastName } from "../../User/userReducer";
const Accounts = [
  {
    id: 1,
    title: "Argent Bank Checking (x8349)",
    amount: "$48,098.43",
    description:"Available Balance",
  },
  {
    id: 2,
    title: "Argent Bank Savings (x6712)",
    amount: "$48,098.43",
    description:"Available Balance",
  },
  {
    id: 3,
    title: "Argent Bank Credit Card (x8349)",
    amount: "$48,098.43",
    description:"Available Balance",
  },
];
function EditUser() {
    const dispatch = useDispatch();
    const userName = useSelector((state) => state.user.userName);
    const firstName = useSelector((state) => state.user.firstName);
    const lastName = useSelector((state) => state.user.lastName);
    const token = useSelector((state) => state.user.token);
    const [showForm, setShowForm] = useState(true);
    const [newUsername, setNewUsername] = useState(userName || "");
    if (!token) {
      return  (<Navigate to="/sign-in"></Navigate>)
    }
    const handleUpdateName = (event) => {
      const username = document.getElementById("username").value;
      if (username !== "") {
        event.preventDefault();
        setNewUsername(username);
        dispatch(updateUserName({ userName: username }));
        updateData(username);
        setShowForm(false);
        console.log(userName)
      } else {
        console.error("Username is required.");
      }
    };
  
    const updateData = (username) => {
    const userData = {
      userName: username,
    };
  
    fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update user profile");
        }
        console.log("Username successfully changed");
      })
      .catch((error) => {
        console.error("Error updating username.");
        console.log(error);
      });
  };
  

    return(
        <>
        {showForm && (
        <div className="sign-in-content">
        <h1>Edit user info</h1>
          <form>
            <div className="input-user">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" defaultValue={newUsername} />
            </div>
            <div className="input-user">
              <label htmlFor="firstname">First name:</label>
              <input
                type="text"
                id="firstname"
                value={firstName || ""}
                onChange={(e) =>
                  dispatch(setFirstName({ firstName: e.target.value }))
                }
                disabled
              />
            </div>
            <div className="input-user">
              <label htmlFor="lastname">Last name:</label>
              <input
                type="text"
                id="lastname"
                value={lastName || ""}
                onChange={(e) =>
                  dispatch(setLastName({ lastName: e.target.value }))
                }
                disabled
              />
            </div>
            <div className="row">
              <button className="edit-button wide-button" onClick={handleUpdateName}>
                Save
              </button>
              <button className="edit-button wide-button">Cancel</button>
            </div>
          </form>
      </div>
      )}
      {!showForm && (
        <div>
          <h1>User info saved successfully!</h1>
        </div>
      )}
        <div className="column">
          {Accounts.map((account) => (
            <div className="darkField" key={account.id}>
              <div className="left">
                <h3 className="account-title">{account.title}</h3>
                <p className="account-amount">{account.amount}</p>
                <p className="account-amount-description">{account.description}</p>
              </div>
              <NavLink to="/Transaction">
                <i className="fa-solid fa-chevron-right"></i>
              </NavLink>
            </div>
          ))}
        </div>
      </>
    );
  }
    export default EditUser;