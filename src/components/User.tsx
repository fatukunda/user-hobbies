import React from "react";
import { IUser } from "../models";

interface IUserProps {
    user: IUser,
    onShowUserHobbies: (event: React.MouseEvent<HTMLDivElement>) => void,
    isSelected: boolean
}

const User = ({ user, onShowUserHobbies, isSelected } : IUserProps) => {
    return (
        <div className={`row ${isSelected? 'selected-user': ''}` } onClick={ onShowUserHobbies }>
            <div className="column">
                <div className="username">
                  { user.name }
                </div>
            </div>
        </div>
    )
}

export default User;