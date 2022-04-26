import React, { useEffect, useState } from "react"
import { getUsers, addUser, updateUserHobbies } from "../services/user"
import User from "../components/User"
import Hobby from "../components/Hobby"
import { IHobby, IUser } from "../interfaces"
import { useFormFields } from "../lib/hooksLib"
import UserForm from "../components/UserForm"
import HobbyForm from "../components/HobbyForm"

const Home = () => {
    
  const [ users, setUsers ] = useState([])
  const [ selectedUser, setSelectedUser ] = useState(null)
  const [ fields, handleFieldChange ] = useFormFields({
    userName: "",
    hobbyName: "",
    passionLevel: "",
    year: ""
  })

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  }

  const saveUser = async() => {
    const data = {
      id: users.length + 1,
      name: fields.userName,
      hobbies: []
    }
    await addUser(data);
    fetchUsers();
  }

  const addHobby = async () => {
    const newHobby = {
      id: selectedUser.hobbies.length + 1,
      name: fields.hobbyName,
      passionLevel: fields.passionLevel,
      year: fields.year
    }
    const payload = {
      id: selectedUser.id,
      name: selectedUser.name,
      hobbies: [
        ...selectedUser.hobbies,newHobby
      ]
    }
    const res = await updateUserHobbies(payload);

    console.log(payload);
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
              users?.map((user: IUser) => (
                <User 
                  key={user.id} 
                  user={user} 
                  onShowUserHobbies= {()=> setSelectedUser(user)} />
                ))
            }
          </div>
          <div className="column hobby-container">
            <HobbyForm 
              hobby={{passionLevel: fields.passionLevel, year: fields.year, name: fields.hobbyName }}
              onAddUserHobby={addHobby}
              onSetUserHobby={handleFieldChange} 
            />
           {/* <div className="row">
             <div className="column">
               <input type="text" placeholder="Enter passion level" />
             </div>
             <div className="column">
               <input type="text" placeholder="Enter user hobby" />
             </div>
             <div className="column">
               <input type="text" placeholder="Enter year" />
             </div>
             <div className="column">
               <button>Add</button>
             </div>
           </div> */}
           {
             selectedUser && selectedUser.hobbies.length && 
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