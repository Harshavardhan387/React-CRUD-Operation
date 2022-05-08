import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../FakeData";

const userSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      // write code for adding a user
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updateUserName: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.userName = action.payload.userName;
        }
      });
    },
    newUser: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.userName = action.payload.userName;
        }
      });
    },
  },
});

export const { addUser, deleteUser, updateUserName } = userSlice.actions;
export default userSlice.reducer;
