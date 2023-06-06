import React, { useState, useEffect} from 'react';
import { connect} from 'react-redux';
import { login } from '../../User/userActions';
import "../../Pages/main.css";
import { useNavigate } from 'react-router-dom';

function SignIn({ login, error }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);
  console.log(token)
  async function handleSubmit(event) {
    event.preventDefault();
    login(email, password)
      .then((response) => {
        if (response.payload && response.payload.token) {
          const { token } = response.payload;
          setToken(token);
          localStorage.setItem('token', token);
          navigate('/user');
        } else {
          console.error("La réponse de la connexion ne contient pas de token.");
        }
    })
    .catch((error) => {
      console.log(error);
      console.error("Cet identifiant ou ce mot de passe est inconnu, veuillez réessayer.");
    });
  }
  
  
  return (
    <div className="main bg-dark sign-in-container">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error && <div>{error}</div>}
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>
    </div>
  );
}

const mapStateToProps = (state) => ({
  error: state.user.error
});

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

