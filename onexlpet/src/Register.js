import React, { useState, useEffect } from "react";

function Register({ onRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (username && password) {
      localStorage.setItem("user", JSON.stringify({ username, password }));
      alert("Registration successful!");
      // onRegister(username);
    } else {
      alert("Please enter a username and password");
    }
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUsername(storedUser.username);
    }
  }, []);

  return (
    <div className="absolute w-[600px] mt-[150px] ml-[400px] flex items-center flex-col gap-10 ">
      <h2 className="text-xl font-semibold">Register</h2>
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
        onClick={handleRegister}
        className="text-white font-semibold rounded-[5px] w-[148px] h-[49px] bg-[#124C5F]"
      >
        Submit
      </button>
    </div>
  );
}

export default Register;
