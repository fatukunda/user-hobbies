import { IUserHobby } from "../../models";
import { getUsers, addUser, updateUserHobbies } from "../../services/user";
import { AppThunk } from "../index";
import { setUsers, setSelectedUser } from "../slices/userSlice";


export const fetchUsers = () : AppThunk => {
    return async(dispatch) => {
            const res : IUserHobby[] = await getUsers();
            dispatch(setUsers(res))
    }
}

export const setChosenUser = (selectedUser: IUserHobby): AppThunk => {
    return (dispatch) => {
        dispatch(setSelectedUser(selectedUser))
    }
}

export const createNewUser = (userData: IUserHobby): AppThunk => {
    return async (dispatch) => {
        const res: IUserHobby = await addUser(userData)
    }
}

export const updateUser = (userData: IUserHobby): AppThunk => {
    return async (dispatch) => {
        const res: IUserHobby = await updateUserHobbies(userData)
    }
}
