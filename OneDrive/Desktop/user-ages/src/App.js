import "./App.css";
import { useState } from "react";
import { InputForm } from "./components/InputForm/InputForm";
import { Users } from "./components/Users/Users";

function App() {
  const [users, userState] = useState([]);

  const addUser = (data) => {
    const updatedUsers = [...users];
    updatedUsers.push(data);
    userState(updatedUsers);
  };

  users.sort((a, b) => {
    return b.age - a.age;
  });
  return (
    <div className="App">
      <InputForm addUser={addUser} />
      <Users users={users} />
    </div>
  );
}

export default App;
