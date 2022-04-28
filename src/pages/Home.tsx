import React, { useEffect } from "react"
import User from "../components/User"
import Hobby from "../components/Hobby"
import { IUser, IUserHobby } from "../models"
import { useFormFields, useAppDispatch, useAppSelector  } from "../hooks/hooksLib"
import UserForm from "../components/UserForm"
import HobbyForm from "../components/HobbyForm"
import { fetchUsers, setChosenUser, createNewUser, deleteHobby, getAllUserHobbies, addHobby } from "../store/actions/userActions"
import { capitalize, isAcceptablePassionLevel } from "../helpers"

const Home = () => {
    
  const [ fields, handleFieldChange ] = useFormFields({
    userName: "",
    hobbyName: "",
    passionLevel: "",
    year: ""
  })
  const dispatch = useAppDispatch();
  const users = useAppSelector(state => state.userReducer.users)
  const selectedUser = useAppSelector(state => state.userReducer.selectedUser)
  const userHobbies = useAppSelector(state => state.userReducer.userHobbies)
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  const saveUser = async() => {
    if (!fields.userName) {
      alert('User name is required.')
      return
    }
    const data = {
      id: users.length + 1,
      name: capitalize(fields.userName)
    }
    dispatch(createNewUser(data))
    dispatch(fetchUsers())
    fields.userName = ''
  }

  const fetchUserHobbies = (user: IUser) => {
    dispatch(setChosenUser(user))
    dispatch(getAllUserHobbies(user.id))
  }

  const createHobby = async () => {
    if (!fields.hobbyName || !fields.passionLevel || !fields.year) {
      alert('All hobby fields are required.')
      return
    }
    const isAcceptablePassion = isAcceptablePassionLevel(fields.passionLevel)
    if (!isAcceptablePassion) {
      alert('Passion level is not acceptable. Acceptable leves include Low, Medium, High, Very-High')
      return
    }
    
    const payload = {
      name: capitalize(fields.hobbyName),
      passionLevel: capitalize(fields.passionLevel),
      year: fields.year,
      user_id: selectedUser.id
    }
    const existingHobby = userHobbies.find(hobby => hobby.name === payload.name)
    if (existingHobby) {
      return alert(`${selectedUser.name} already has a hobby called ${payload.name}`)
    }
    dispatch(addHobby(payload))
    dispatch(getAllUserHobbies(selectedUser.id))
    fields.hobbyName = ''
    fields.passionLevel = ''
    fields.year = ''
  }

  const removeUserHobby = async (hobby: IUserHobby) => {
    const removeHobby = confirm('Are you sure you want to delete this hobby?')
    if(removeHobby) {
      dispatch(deleteHobby(hobby.id))
      dispatch(getAllUserHobbies(selectedUser.id))
    }
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
              users?.map((user: IUser) => (
                <User 
                  key={user.id} 
                  user={user} 
                  onShowUserHobbies= {() => fetchUserHobbies(user)}
                  isSelected={user.id === selectedUser.id}
                  />
                ))
            }
          </div>
          <div className="column hobby-container">
            <HobbyForm 
              hobby={{passionLevel: fields.passionLevel, year: fields.year, name: fields.hobbyName }}
              onAddUserHobby={createHobby}
              onSetUserHobby={handleFieldChange}
              disabled={!selectedUser.id}
            />
           {
             userHobbies && 
             userHobbies.map((hobby: IUserHobby) => (
               <Hobby key={hobby.id} hobby={hobby} onDeleteUserHobby={() => removeUserHobby(hobby)} />
             ))
           }
          </div>
        </div>

      </div>
)
}

export default Home;