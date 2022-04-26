export interface IUser {
    id: number,
    name: string
}

export interface IHobby {
    id?: number,
    name: string
    passionLevel: string,
    year: number
}

export interface IUserHobby {
    id: number,
    name: string,
    hobbies: IHobby[]
}

export interface IUserHobbies {
    userHobbies: IUserHobby[]
}

export interface IUsers {
    users: IUser[]
}

export interface UserHobbiesModel {
    userHobbies:IUserHobby[],
    selectedUser: IUserHobby
}

