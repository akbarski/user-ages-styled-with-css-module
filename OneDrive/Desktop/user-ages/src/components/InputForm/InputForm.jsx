import { Input } from "./Input/Input";
import { useState } from "react";
import { Button } from "./Button/Button";
import "./InputForm.css";
export const InputForm = ({ addUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("0");

  const changeName = (event) => {
    setName(event.target.value);
  };
  const changeAge = (event) => {
    setAge(event.target.value);
  };

  const confirmUser = (e) => {
    e.preventDefault();

    const userData = {
      name,
      age,
    };

    addUser(userData);

    setAge("0");
    setName("");
  };

  return (
    <form className="input-form">
      <Input
        id="name"
        inputType="text"
        labelName="Name"
        value={name}
        onChange={changeName}
      />

      <div className="input-range">
        <Input
          id="age"
          inputType="range"
          labelName="Age"
          value={age}
          onChange={changeAge}
        />
        <p className="age--text">{age}</p>
      </div>
      <Button
        title="ADD"
        onClick={confirmUser}
        disabled={name === "" || age === "0"}
      />
    </form>
  );
};
