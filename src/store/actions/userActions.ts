import { IUserHobby, IUser } from "../../models";
import { getUsers, addUser, deleteUserHobby, getUserHobbies, addUserHobby } from "../../services/user";
import { AppThunk } from "../index";
import { setUsers, setSelectedUser, setUserHobbies } from "../slices/userSlice";


export const fetchUsers = () : AppThunk => {
    return async(dispatch) => {
            const res : IUser[] = await getUsers();
            dispatch(setUsers(res))
    }
}

export const setChosenUser = (selectedUser: IUser): AppThunk => {
    return (dispatch) => {
        dispatch(setSelectedUser(selectedUser))
    }
}

export const createNewUser = (userData: IUser): AppThunk => {
    return async (dispatch) => {
        const res: IUser = await addUser(userData)
    }
}

export const getAllUserHobbies = (userId: number): AppThunk => {
    return async (dispatch) => {
        const res: IUserHobby[] = await getUserHobbies(userId)
        dispatch(setUserHobbies(res))
    }
}

export const addHobby = (hobbyData: IUserHobby): AppThunk => {
    return async (dispatch) => {
        const res = await addUserHobby(hobbyData)
        
    }
}

export const deleteHobby = (id: number): AppThunk => {
    return async (dispatch) => {
        const res: IUserHobby = await deleteUserHobby(id)
    }
}
