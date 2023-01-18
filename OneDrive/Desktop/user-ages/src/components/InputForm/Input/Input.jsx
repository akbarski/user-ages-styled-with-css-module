import classes from "./Input.module.css";

export const Input = ({ inputType, id, labelName, ...rest }) => {
  return (
    <div className={classes.inputField}>
      <label htmlFor={id}>{labelName}</label>
      <input type={inputType} id={id} {...rest} />
    </div>
  );
};
