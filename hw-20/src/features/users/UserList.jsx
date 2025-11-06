import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "./UserSlice";

export const UserList = () => {
  const users = useSelector((state) => state.users.list);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>User list</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => dispatch(removeUser(user.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
