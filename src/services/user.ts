import { IUser } from "../interfaces";

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

export const updateUserHobbies = async (data) => {
    const { id } = data;
    
    const res = await fetch(`${baseUrl}/users/${id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(data)
    })
    return res.json();
}