import SignUpRouteComponent from "./signInRoute/signInRouteComponent.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./components/reset.js"

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/signUp" element={<SignUpRouteComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
