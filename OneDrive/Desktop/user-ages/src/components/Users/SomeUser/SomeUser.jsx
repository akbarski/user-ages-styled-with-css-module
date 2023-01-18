import style from "./SomeUser.module.css";

export const SomeUser = ({ data }) => {
  return (
    <div className={style.userBox}>
      <p>{`${data.name} ${data.age} years old`}</p>
    </div>
  );
};
