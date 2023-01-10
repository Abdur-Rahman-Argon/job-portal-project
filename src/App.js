import React, { useEffect } from "react";
// import Main from "./layout/Main";
import routes from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { exitsUser, getUser, logout } from "./features/auth/authSlice";
import auth from "./firebase.init";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // dispatch(exitsUser(user));
        dispatch(getUser(user.email));
        console.log(user.email);
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className=" px-2 lg:mx-5">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
