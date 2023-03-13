import '../App.css';
import Main from './authForm/Main';
import {useAuthState} from 'react-firebase-hooks/auth';
import { useEffect } from "react";
import { useContextProvider } from "../context/StateProvider";
import { auth } from "../firebase/Firebase";
import MainDashBoard from './dashBoard/MainDashBoard';

function App() {

  const [user] = useAuthState(auth);

  const [{ appUser }, dispatch ] = useContextProvider();
  
  useEffect(() => {
    if (user) {
      dispatch({
        type: "user",
        payload: user
      });
    }
  }, [user]);

  return (
   
    <div>
      {/* <MainDashBoard /> */}
        { user? <MainDashBoard /> : < Main/> }
    </div>
  );
}

export default App;
