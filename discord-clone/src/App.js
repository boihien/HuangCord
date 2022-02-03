import React, { useEffect } from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from './features/userSlice';
import Login from "./Login";
import { auth } from "./firebase";
import { login, logout } from './features/userSlice';
function App() {    
    const dispatch = useDispatch(); //use dispatch to go into the data layer of the onion
    const user=useSelector(selectUser);

    useEffect(() => { //useEffect runs once when the component loads
        auth.onAuthStateChanged((authUser) => { //this is listener: everytime user logs in, get user
          //console.log("user is ", authUser);
          if(authUser){
            //the user is logged in
            dispatch(
              login({
                uid: authUser.uid,
                photo: authUser.photoURL,
                email: authUser.email,
                displayName: authUser.displayName,
              })
            );
          }
          else{
            //the user is logged out
            dispatch(logout());
          }
        })
    }, [dispatch])

     return (
      <div className="app">
        {user ? (
          <>
            <Sidebar />
            <Chat />
          </>
        ) : (
          <Login/>
        )}
      </div>
  );
}
export default App;