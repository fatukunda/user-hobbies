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

export interface IUsers {
    users: IUser[]
}

export interface IUserHobby {
    user: IUser,
    hobbies: IHobby[]
}
