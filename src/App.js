import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [hasError, setError] = useState(false);
  const [users, setUsers] = useState({});

  async function fetchData() {
    const res = await fetch("https://randomuser.me/api/");
    res
      .json()
      .then((res) => setUsers(res))
      .catch((err) => setError(err));
  }
  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <span>{JSON.stringify(users)}</span>
      <hr />
      <span>Has Error : {JSON.stringify(hasError)}</span>
    </div>
  );
};

export default App;
