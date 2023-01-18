import { SomeUser } from "./SomeUser/SomeUser";
import classes from "./Users.module.css";

export const Users = ({ users }) => {
  return (
    <div className={classes.users}>
      {users.map((elem) => {
        return <SomeUser data={elem} />;
      })}
    </div>
  );
};
