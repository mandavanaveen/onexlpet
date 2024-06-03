import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin({ onSignIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.username === username &&
      storedUser.password === password
    ) {
      onSignIn(username);
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="absolute w-[600px] mt-[150px] ml-[400px] flex items-center flex-col gap-10 ">
      <h2 className="text-xl font-semibold">Sign In</h2>
      <input
        className="w-[400px] h-14"
        type="text"
        placeholder="Username or Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="w-[400px] h-14"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="text-white font-semibold rounded-[5px] w-[148px] h-[49px] bg-[#124C5F]"
        onClick={handleSignIn}
      >
        Sign In
      </button>
    </div>
  );
}

export default Signin;
