import "./SomeUser.css";

export const SomeUser = ({ data }) => {
  return (
    <div className="user-box">
      <p>{`${data.name} ${data.age} years old`}</p>
    </div>
  );
};
