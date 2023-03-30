const { createSlice } = require('@reduxjs/toolkit');
const { UsersData } = require('../FakeData');

const userSlice = createSlice({
  name: 'user',
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },

    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { addUser,deleteUser } = userSlice.actions;
export default userSlice.reducer;
