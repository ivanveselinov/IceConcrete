import '../App.css';
import Main from './authForm/Main';
import {useAuthState} from 'react-firebase-hooks/auth';
import { useEffect, useState } from "react";
import { useContextProvider } from "../context/StateProvider";
import { auth } from "../firebase/Firebase";
import { Route, Routes, useLocation } from 'react-router-dom';
import MainDashBoard from './dashBoard/MainDashBoard'


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
    
    <section className="min-h-screen dark:text-gray-100 dark:bg-slate-900 duration-100">     
      <Routes>
          <Route path="/admin" element={<Main/>}>  
        </Route>

      <Route path="/" element={<MainDashBoard/>}>
        </Route>
      </Routes>
    </section>

  );
}

export default App;
