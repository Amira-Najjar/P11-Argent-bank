import React, { useEffect } from "react"
import "../../Pages/main.css";
import { NavLink } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { getProfile } from "../../User/userActions";

function EditName ({firstName}){
 
  const dispatch = useDispatch();
  const userFirstName = useSelector((state) => state?.user?.firstName);
  const userLastName = useSelector((state) => state?.user?.lastName);
  const token = useSelector((state) => state.user.token);
  useEffect(() => {
    if (token) {
      dispatch(getProfile(token));
    }
  }, [dispatch, token]);
    return (
      <div className="header">
        <h1>Welcome back<br />{userFirstName} {userLastName}!</h1>
        <NavLink to="/EditUser">
         <button className="edit-button">Edit Name</button>
        </NavLink>
      </div>
      
     ) }
      export default EditName;