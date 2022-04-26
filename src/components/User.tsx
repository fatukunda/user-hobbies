import React from "react";
import { IUser } from "../interfaces";

interface IUserProps {
    user: IUser,
    onShowUserHobbies: (event: React.MouseEvent<HTMLDivElement>) => void
}

const User = ({ user, onShowUserHobbies } : IUserProps) => {
    return (
        <div className="row" onClick={ onShowUserHobbies }>
            <div className="column">
                <div className="username">
                  { user.name }
                </div>
            </div>
        </div>
    )
}

export default User;