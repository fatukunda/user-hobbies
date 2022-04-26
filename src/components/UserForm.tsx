import React from 'react'

interface IUserFormProps {
    onAddUser: (event: React.MouseEvent<HTMLButtonElement>) => void,
    onSetUser: React.ChangeEventHandler<HTMLInputElement>,
    name: string
}

const UserForm = ({ onSetUser, onAddUser, name }: IUserFormProps) => {
    return (
        <div className="row">
            <div className="column">
                <input 
                    type="text" 
                    placeholder="Enter Username" 
                    onChange={onSetUser} 
                    value={name}
                    id="userName"
                />
            </div>
            <div className="column">
                <button onClick={onAddUser}>Add</button>
            </div>
        </div>
    )
}

export default UserForm;