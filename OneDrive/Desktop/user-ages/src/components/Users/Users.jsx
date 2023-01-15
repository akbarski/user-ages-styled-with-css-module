import { SomeUser } from "./SomeUser/SomeUser";
import "./Users.css"
export const Users = ({ users }) => {
  return (
    <div className="users">
      {users.map((elem) => {
        return <SomeUser data={elem} />;
      })}
    </div>
  );
};
