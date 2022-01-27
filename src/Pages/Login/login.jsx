import '../Login/login.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";

function Login() {

  const navigate = useNavigate(); 

  return (
    <>
     <div className='login__wrapper'>
        <TextField
          required
          id="outlined-required"
          label="Login"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <Button type='submit' variant="contained" size="large" onClick={() => navigate('/home')} >Log in</Button>
      </div>
    </>
  );
}

export default Login;