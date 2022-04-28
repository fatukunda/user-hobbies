export interface IUser {
    id: number,
    name: string
}

export interface IUserHobby {
    id?: number,
    name: string
    passionLevel: string,
    year: number
    user_id?: number
}
export interface UserHobbiesModel {
    users: IUser[]
    userHobbies:IUserHobby[],
    selectedUser: IUser
}

