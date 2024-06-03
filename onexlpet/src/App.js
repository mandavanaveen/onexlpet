import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Todoapp from "./Todoapp";
import Home from "./Home";
import Categories from "./Categories";
import Register from "./Register";
import Signin from "./Signin";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleSignIn = (username) => {
    setCurrentUser(username);
  };

  const handleSignOut = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div className="w-[1440px] h-[900px] absolute overflow-hidden">
      <Router>
        <Navbar currentUser={currentUser} onSignOut={handleSignOut} />
        <Routes>
          <Route path="/products" Component={Todoapp} />
          <Route path="/" Component={Home} />
          <Route path="/categories" Component={Categories} />
          <Route
            path="/register"
            element={<Register onRegister={() => {}} />}
          />
          <Route path="/signin" element={<Signin onSignIn={handleSignIn} />} />
        </Routes>
        <img
          src="./images/Vector1.png"
          className="-z-10 w-[1474px] h-[696px]"
          alt="bg back"
        ></img>
      </Router>
    </div>
  );
}

export default App;
