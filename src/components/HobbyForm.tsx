import { IUserHobby } from '../models';
import React from 'react'

interface IHobbyFormProps {
    onAddUserHobby: (event: React.MouseEvent<HTMLButtonElement>) => void,
    onSetUserHobby: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>,
    hobby: IUserHobby,
    disabled: boolean
}

const HobbyForm = ({ onSetUserHobby, onAddUserHobby, hobby, disabled }: IHobbyFormProps) => {
    return (
        <div className="row">
            <div className="column">
               <input 
                value={hobby.passionLevel} 
                type="text" 
                placeholder="Enter passion level" 
                onChange={onSetUserHobby} 
                id="passionLevel"
                disabled={disabled}
                />
            </div>
            <div className="column">
               <input 
                value={hobby.name} 
                type="text" 
                placeholder="Enter user hobby"
                onChange={onSetUserHobby} 
                id="hobbyName"
                disabled={disabled}
                 />
            </div>
            <div className="column">
               <input 
                value={hobby.year} 
                type="number" 
                placeholder="Enter year"
                onChange={onSetUserHobby}
                id="year" 
                maxLength={4}
                minLength={4}
                disabled={disabled}
                />
            </div>
            <div className="column">
               <button onClick={onAddUserHobby}>Add</button>
            </div>
        </div>
    )
}

export default HobbyForm;