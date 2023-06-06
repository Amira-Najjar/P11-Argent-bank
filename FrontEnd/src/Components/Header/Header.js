import React , { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { getProfile } from "../../User/userActions";
import { logout } from "../../User/userReducer";
import Logo from '../../Assets/argentBankLogo.png';
import "../../Pages/main.css";
function Header() {
  const dispatch = useDispatch();
  //const userFirstName = useSelector((state) => state?.user?.firstName);
  const userName = useSelector((state) => state?.user?.userName);
  const token = useSelector((state) => state.user.token);
  useEffect(() => {
    if (token) {
      dispatch(getProfile(token));
    }
  }, [dispatch, token]);
  console.log(userName)
  const handleSignOut = () => {
    dispatch(logout()); // Dispatch l'action logout pour réinitialiser les informations de l'utilisateur
  };
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      
        {token ? (
          <div className="main-nav">
          <Link className="main-nav a" >
            <i className="fa fa-user-circle"></i>
            <p className="user name">{userName}</p>
          </Link>
          <Link className="sign-out-link" to="/" onClick={handleSignOut}> 
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
           
        ) : (
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      
    </nav>
  );
}

export default Header;


