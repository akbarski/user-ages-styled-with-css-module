import { Input } from "./Input/Input";
import { useState } from "react";
import { Button } from "./Button/Button";
import classes from"./InputForm.module.css";
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
    <form className={classes.inputForm}>
      <Input
        id="name"
        inputType="text"
        labelName="Name"
        value={name}
        onChange={changeName}
      />

      <div className={classes.inputRange}>
        <Input
          id="age"
          inputType="range"
          labelName="Age"
          value={age}
          onChange={changeAge}
        />
        <p className={classes.ageText}>{age}</p>
      </div>
      <Button
        title="ADD"
        onClick={confirmUser}
        disabled={name === "" || age === "0"}
      />
    </form>
  );
};
