import { createSlice } from "@reduxjs/toolkit";

const UsersData = [
  {
    id: 1,
    firstname: "Leanne Graham",
    lastname: "Bret",
  },
  {
    id: 2,
    firstname: "Ervin Howell",
    lastname: "Antonette",
  },
  {
    id: 3,
    firstname: "Clementine Bauch",
    lastname: "clementine",
  },
  {
    id: 4,
    firstname: "Patricia Lebsack",
    lastname: "Karianne",
  },
  {
    id: 5,
    firstname: "Chelsey Dietrich",
    lastname: "Kamren",
  },
  {
    id: 6,
    firstname: "Jake Runolfsdottir V",
    lastname: "Leopoldo_Corkery",
  },
  {
    id: 7,
    firstname: "Mrs. Dennis Schulist",
    lastname: "Karley_Dach",
  },
  {
    id: 8,
    firstname: "Kurtis Weissnat",
    lastname: "Elwyn.Skiles",
  },
];


export const usersSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      console.log(state.value);

      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updateUsername: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.firstname = action.payload.firstname;
        }
      });
    },
  },
});
export const { addUser, deleteUser, updateUsername } = usersSlice.actions;
export default usersSlice.reducer