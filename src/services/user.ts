import { IUser, IUserHobby } from "../models";

const baseUrl = process.env.API_URL;
const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

export const getUsers = async () => {
    const data = await fetch(`${baseUrl}/users`, { headers });
    return data.json();
}

export const addUser = async (data: IUser) => {
    const res = await fetch(`${baseUrl}/users`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    })
    return res.json();
}

export const getUserHobbies = async (userId: number) => {
    const res = await fetch(`${baseUrl}/user-hobbies?user_id=${userId}`, { headers});
    return res.json();
}

export const addUserHobby = async (data:IUserHobby) => {
    const res = await fetch(`${baseUrl}/user-hobbies`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    })
}

export const deleteUserHobby = async (id: number) => {
    
    const res = await fetch(`${baseUrl}/user-hobbies/${id}`, {
        method: 'DELETE',
        headers,
    })
    return res.json();
}