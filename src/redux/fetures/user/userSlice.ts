import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface UserState {
  isLogin: boolean,
  userInfo: any
}

const initialState: UserState = {
  isLogin: false,
  userInfo: {}
}

export const login = createAsyncThunk('user/login', async () => {
  await fetch('/mock/login')
  return {
    username: 'Admin'
  }
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout (state, action) {
      state.isLogin = false
      state.userInfo = {}
    }
  },
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLogin = true
      state.userInfo = action.payload
    })
  }
})

export const { logout } = userSlice.actions
export default userSlice.reducer