import {configureStore} from '@reduxjs/toolkit'
import global from '@/redux/fetures/global/globalSlice'
import user from '@/redux/fetures/user/userSlice'
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux'

const store = configureStore({
  reducer: {
    global,
    user
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
