import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UserHobbiesModel, IUserHobby, IUser } from "../../models"

const initialState: UserHobbiesModel = {
    users: [],
    selectedUser: {
        id: null,
        name: '',
    },
    userHobbies: []
}

export const userSlice = createSlice({
    name: 'userHobbies',
    initialState,
    reducers: {
        setUsers: (state, { payload }: PayloadAction<IUser[]>) => {
            state.users = payload
        },
        setSelectedUser: (state, { payload }: PayloadAction<IUser>) => {
            state.selectedUser = payload
        },
        setUserHobbies: (state, { payload }: PayloadAction<IUserHobby[]>) => {
            state.userHobbies = payload
        }
    }
})

export const { setUsers, setSelectedUser, setUserHobbies } = userSlice.actions

