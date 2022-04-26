import { Action, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux'
import { ThunkAction } from '@reduxjs/toolkit'
import { userSlice } from './slices/userSlice'

export const store = configureStore({
  reducer: {
    userReducer: userSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;

export const useAppDispatch = () => useDispatch()
export type AppThunk = ThunkAction<void, RootState, unknown, Action>

export default store