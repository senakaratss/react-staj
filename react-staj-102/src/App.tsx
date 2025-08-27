import { useEffect, useState } from "react";
const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <>
      {users.map((user) => (
        <h1>{user.name}</h1>
      ))}
    </>
  );
};

export default App;
