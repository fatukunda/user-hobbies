import React from "react";
import { IUserHobby } from "../models";

interface IHobbyProps {
    hobby: IUserHobby,
    onDeleteUserHobby: (event: React.MouseEvent<HTMLDivElement>) => void
}

const Hobby = ({ hobby, onDeleteUserHobby } : IHobbyProps) => {
    return (
        <div className="row">
            <div className="column">
                <div className="passion-col">
                    passion: { hobby.passionLevel }
                </div>
            </div>
            <div className="column">
                <div className="passion-col">
                    { hobby.name }
                </div>
            </div>
            <div className="column">
                <div className="passion-col">
                    Since { hobby.year }
                </div>
            </div>
            <div className="column" onClick={onDeleteUserHobby }>
                <div className="passion-col">
                    <span className="delete-icon">X</span>
                </div>
            </div>
        </div>
    )
}

export default Hobby;