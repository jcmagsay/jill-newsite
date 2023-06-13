import { createSlice } from '@reduxjs/toolkit'

type NavSliceState = {
  isOpen: boolean;
};

const initialState: NavSliceState = {
  isOpen: false,
};

const navReducers = {
  toggleOpen(state: NavSliceState) {
    state.isOpen = !state.isOpen
  },
};

const NavSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: navReducers,
})

export const { toggleOpen } = NavSlice.actions
export default NavSlice.reducer
