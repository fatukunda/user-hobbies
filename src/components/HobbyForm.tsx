import { IHobby } from '../models';
import React from 'react'

interface IHobbyFormProps {
    onAddUserHobby: (event: React.MouseEvent<HTMLButtonElement>) => void,
    onSetUserHobby: React.ChangeEventHandler<HTMLInputElement>,
    hobby: IHobby
}

const HobbyForm = ({ onSetUserHobby, onAddUserHobby, hobby }: IHobbyFormProps) => {
    return (
        <div className="row">
            <div className="column">
               <input 
                value={hobby.passionLevel} 
                type="text" 
                placeholder="Enter passion level" 
                onChange={onSetUserHobby} 
                id="passionLevel"
                />

            </div>
            <div className="column">
               <input 
                value={hobby.name} 
                type="text" 
                placeholder="Enter user hobby"
                onChange={onSetUserHobby} 
                id="hobbyName"
                 />
            </div>
            <div className="column">
               <input 
                value={hobby.year} 
                type="text" 
                placeholder="Enter year"
                onChange={onSetUserHobby}
                id="year" 
                />
            </div>
            <div className="column">
               <button onClick={onAddUserHobby}>Add</button>
            </div>
        </div>
    )
}

export default HobbyForm;