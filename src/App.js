import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUserName } from "./components/Users";
import { useState } from "react";

function App() {
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [newUserName, setNewUserName] = useState("");

  return (
    <div className="App ">
      <div className="addUser ">
        <input
          type="text"
          placeholder="First Name...."
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Last Name...."
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="User Name...."
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                firstName,
                lastName,
                userName,
              })
            );
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div>
              <h3>
                <span>First Name:</span>
                {user.firstName}
              </h3>
              <h3>
                <span>Last Name:</span>
                {user.lastName}
              </h3>
              <h3>
                <span>User Name:</span>
                {user.userName}
              </h3>
              <input
                type="text"
                placeholder="New User Name...."
                onChange={(event) => {
                  setNewUserName(event.target.value);
                }}
              />
              <button
                onClick={() => {
                  dispatch(
                    updateUserName({
                      id: user.id,
                      userName: newUserName,
                    })
                  );
                }}
              >
                Update UN
              </button>
              <button
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }}
              >
                Delete User
              </button>
              <button>Add Another User</button>
              <button>Add the next button here </button>
              <h2>Check the feature added in test branch here...!</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
