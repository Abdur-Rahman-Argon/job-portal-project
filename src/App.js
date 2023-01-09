import React from "react";
// import Main from "./layout/Main";
import routes from "./routes/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className=" px-2 lg:mx-5">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
