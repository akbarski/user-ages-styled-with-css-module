import "./Input.css"

export const Input = ({ inputType, id, labelName, ...rest }) => {
  return (
    <div className="input--field">
      <label htmlFor={id}>{labelName}</label>
      <input type={inputType} id={id} {...rest} />
    </div>
  );
};
