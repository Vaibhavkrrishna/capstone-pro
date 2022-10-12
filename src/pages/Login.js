import React, {useContext,useState} from 'react';

<<<<<<< HEAD
import { useSetState } from 'react-use';
import { AuthContext } from '../context/Auth.context.js';
import './Login.css';
const initialState = {
  email: '',
  password: ''
}

const LoginForm = () => {
  const { state: ContextState, login } = useContext(AuthContext);
  const { isLoginPending, isLoggedIn, loginError} = ContextState;
  const [state, setState] = useSetState(initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = state;
    login(email, password);
    setState({
      email: '',
      password: ''
    });
  }
    
  return (
    <div className="form-holder">
    <form name="loginForm" onSubmit={onSubmit}>

      <div className="row ">

        <div className=" ml-6">
          <label htmlFor="email">Username</label>
        </div>
        
        <div className="col-sm-9 col-md-6 text-black ml-6 mb-5 rounded-b-md " >
          <input className='h-9 w-72 mb-5'
            type="text" 
            name="email" 
            onChange={e => setState({email: e.target.value})} 
            value={state.email} 
            placeholder="Enter your username" 
          />
        </div>

        <div className="col-sm-3 col-md-6 ml-6">
          <label htmlFor="password">Password</label>
        </div>
        <div className="col-sm-9 col-md-6  text-black ml-6 mb-5 rounded-b-md">
            <input className='h-9 w-72 mb-5'
              type="password" 
              name="password" 
              onChange={e => setState({password: e.target.value})} 
              value={state.password} 
              placeholder="Enter your password" 
            />
        </div>

        <div className="col-sm-3 col-md-6">
        </div>
        <div className="col-sm-9 col-md-6 bg-sky-500 text-center w-80 ml-2 h-9 mb-3">
          {/* <input className="primary" type="submit" value="Login" /> */}
          <button>Login</button>
        </div>
        
      </div>

      { isLoginPending && <div>Please wait...</div> }
      { isLoggedIn && <div>Success.</div> }
      { loginError && <div>{loginError.message}</div> }
    </form>
    </div>
=======
export default function Login() {
  let [show,setShow] = useState(true);
  return (
    <div><button onClick={()=>{
        setShow(!show)
      }}>Login</button></div>
>>>>>>> 5424ffd30434ebd79d1e5ebc1777e1405236e6a9
  )
}


export default LoginForm;