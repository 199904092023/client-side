import Login from "./pagesss/pages/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Singup from "./pagesss/pages/signup/Signup";
import Home from "./pagesss/pages/home/Home";
import RequireUser from "./Components/RequireUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<RequireUser />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Singup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
