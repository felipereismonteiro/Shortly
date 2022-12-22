import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./components/reset.js"
import SignInComponent from "./signInRoute/signInComponents.js";
import SignUpRouteComponent from "./signUpRoute/signUpRouteComponent.js";
import { Context } from "./context/context"
import { useEffect, useState } from "react";
import UserRoute from "./components/userRoute/userRoute.js";

function App() {
  const [ token, setToken ] = useState(undefined);
  
  if (token !== undefined) {
    localStorage.setItem("token", JSON.stringify(token))
  }

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Context.Provider value={{token, setToken}}>
      <Routes>
        <Route path="/signUp" element={<SignUpRouteComponent />} />
        <Route path="/signIn" element={<SignInComponent />} />
        <Route path="/user" element={<UserRoute />} />
      </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
