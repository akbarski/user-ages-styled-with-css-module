import clasess from "./Button.module.css";

export const Button = ({ title, onClick, disabled }) => {
  return (
    <button disabled={disabled} onClick={onClick} className={clasess.btn}>
      {title}
    </button>
  );
};
