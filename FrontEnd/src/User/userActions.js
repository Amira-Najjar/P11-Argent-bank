import { loginSuccess, loginFailure ,setFirstName, setLastName,setUserName } from './userReducer';
export function login(email, password) {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      const { firstName, lastName, token } = data.body;
      dispatch(loginSuccess({ firstName, lastName, token }));
      return { payload: { token } };
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
}
export function getProfile(token) {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
      });

      if (!response.ok) {
        throw new Error('Failed to get profile data');
      }

      const data = await response.json();
      const { firstName, lastName, userName} = data.body;
      dispatch(setFirstName({ firstName }));
      dispatch(setLastName({  lastName }));
      dispatch(setUserName({  userName }));
    } catch (error) {
      console.log(error);
      console.error("Cet utilisateur est inconnu, veuillez réessayer.");
    }
  };
}