import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./redux/featchers/usersSlice";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [firstname, setFirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    <div className="p-5 flex flex-col gap-5 bg-slate-100 min-h-screen">
      <div className="flex flex-col gap-5">
        <div className="flex h-10 gap-5">
          <input
            className="w-full rounded-lg p-2"
            type="text"
            placeholder="Name..."
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
          <input
            className="w-full rounded-lg p-2"
            type="text"
            placeholder="Username..."
            onChange={(event) => {
              setlastName(event.target.value);
            }}
          />
        </div>
        <button
          className="h-10 rounded-lg w-full shadow-sm shadow-black hover:shadow-none duration-100 hover:bg-slate-300 bg-white "
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                firstname,
                lastname,
              })
            );
          }}
        >
          Add User
        </button>
      </div>
      <div className="flex flex-col gap-5">
        {userList.map((user) => {
          return (
            <div
              key={user.id}
              className="p-5 rounded-lg shadow-sm shadow-black bg-slate-400 flex flex-col gap-5 h-60"
            >
              <div className="flex gap-5 font-bold text-xl text-center justify-center ">
                <h1 className=""> {user.firstname}</h1>
                <h1> {user.lastname}</h1>
              </div>
              <input
                className="w-full rounded-lg p-2"
                type="text"
                placeholder="New Username..."
                onChange={(event) => {
                  setNewUsername(event.target.value);
                }}
              />
              <div className="flex gap-5">
                <button
                  className="h-10 rounded-lg w-full shadow-sm shadow-black hover:shadow-none duration-100 hover:bg-slate-300 bg-white "
                  onClick={() => {
                    dispatch(
                      updateUsername({ id: user.id, firstname: newUsername })
                    );
                  }}
                >
                  {" "}
                  Update Username
                </button>
                <button
                  className="h-10 rounded-lg w-full shadow-sm shadow-black hover:shadow-none duration-100 hover:bg-slate-300 bg-white "
                  onClick={() => {
                    dispatch(deleteUser({ id: user.id }));
                  }}
                >
                  Delete User
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
