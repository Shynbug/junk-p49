import React, { useState, useEffect } from "react";
import TestTimer from "./components/TestTimer";
import LoginForm from "./components/LoginForm";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("token");
    if (saved) setToken(saved);
  }, []);

  const handleLogin = (token) => {
    setToken(token);
  };

  return (
    <div>
      <h1>Stress Test</h1>
      {token ? (
        <>
          <TestTimer question="What is 12 + 8?" onTimeUp={() => alert("Time's up!")} />
          <p>Logged in ✅</p>
        </>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
