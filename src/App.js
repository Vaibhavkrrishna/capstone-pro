import React, {useContext} from "react";

<<<<<<< HEAD
import { AuthContext } from './context/Auth.context.js';
import Login from './pages/Login.js';
import Dashboard from './pages/Dashboard.js';

const App = () => {
  const { state } = useContext(AuthContext);

  if (!state.isLoggedIn) 
    return <Login />;
  else
    return <Dashboard />
=======
export default function App() {
  return (
    <div>App
    </div>
  )
>>>>>>> 5424ffd30434ebd79d1e5ebc1777e1405236e6a9
}

export default App;