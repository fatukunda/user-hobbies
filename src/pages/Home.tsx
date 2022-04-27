import React, { useEffect } from "react"
import User from "../components/User"
import Hobby from "../components/Hobby"
import { IHobby, IUserHobby } from "../models"
import { useFormFields, useAppDispatch, useAppSelector  } from "../hooks/hooksLib"
import UserForm from "../components/UserForm"
import HobbyForm from "../components/HobbyForm"
import { fetchUsers, setChosenUser, createNewUser, updateUser } from "../store/actions/userActions"
import { capitalize, validatePassionLevels } from "../helpers"

const Home = () => {
    
  const [ fields, handleFieldChange ] = useFormFields({
    userName: "",
    hobbyName: "",
    passionLevel: "",
    year: ""
  })
  const dispatch = useAppDispatch();
  const users = useAppSelector(state => state.userReducer.userHobbies)
  const selectedUser = useAppSelector(state => state.userReducer.selectedUser)
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  const saveUser = async() => {
    if (!fields.userName) {
      return alert('User name is required.')
    }
    const data = {
      id: users.length + 1,
      name: capitalize(fields.userName),
      hobbies: []
    }
    dispatch(createNewUser(data))
    dispatch(fetchUsers())
  }

  const addHobby = async () => {
    if (!fields.hobbyName || !fields.passionLevel || !fields.year) {
      return alert('All hobby fields are required.')
    }
    validatePassionLevels(fields.passionLevel)
    const newHobby = {
      id: selectedUser.hobbies.length + 1,
      name: capitalize(fields.hobbyName),
      passionLevel: capitalize(fields.passionLevel),
      year: fields.year
    }
    const payload = {
      id: selectedUser.id,
      name: selectedUser.name,
      hobbies: [
        ...selectedUser.hobbies,newHobby
      ]
    }
    dispatch(updateUser(payload))
    dispatch(fetchUsers())
    dispatch(setChosenUser(payload))
  }

  const deleteUserHobby = () => {
  }
    return (
      <div className="main-container">
        <h3 className="title"> User Hobbies</h3>
        <div className="row inner-container">
          <div className="column user-container">
            <UserForm 
              name={fields.userName} 
              onSetUser={handleFieldChange} 
              onAddUser={saveUser} />
            {
              users?.map((user: IUserHobby) => (
                <User 
                  key={user.id} 
                  user={user} 
                  onShowUserHobbies= {()=> dispatch(setChosenUser(user))}
                  isSelected={user.id === selectedUser.id}
                  />
                ))
            }
          </div>
          <div className="column hobby-container">
            <HobbyForm 
              hobby={{passionLevel: fields.passionLevel, year: fields.year, name: fields.hobbyName }}
              onAddUserHobby={addHobby}
              onSetUserHobby={handleFieldChange}
              disabled={!selectedUser.id}
            />
           {
             selectedUser && 
             selectedUser.hobbies.map((hobby: IHobby) => (
               <Hobby key={hobby.id} hobby={hobby} onDeleteUserHobby={deleteUserHobby} />
             ))
           }
          </div>
        </div>

      </div>
)
}

export default Home;