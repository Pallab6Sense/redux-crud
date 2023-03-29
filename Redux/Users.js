const { createSlice } = require('@reduxjs/toolkit');
const { UsersData } = require('../FakeData');

const userSlice = createSlice({
  name: 'user',
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
