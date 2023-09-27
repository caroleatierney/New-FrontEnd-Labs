import './App.css'
import { useEffect, useState } from 'react'
function App() {
    /* -- YOUR CODE/CRUD OPERATIONS HERE --*/
    const API_URL = 'https://650b5132dfd73d1fab09e2da.mockapi.io/Week15Lab/users'
    const [users, setUsers] = useState([])

    const [newUserName, setNewUserName] = useState('')
    const [newUserJobTitle, setNewUserJobTitle] = useState('')
    const [newUserCompanyName, setNewUserCompanyName] = useState('')

    const [updatedUserName, setUpdatedUserName] = useState('')
    const [updatedJobTitle, setUpdatedJobTitle] = useState('')
    const [updatedCompanyName, setUpdatedCompanyName] = useState('')

    useEffect(() => {
        getUsers()
    }, [])

    function getUsers() {
        fetch(API_URL)
            .then((data) => data.json())
            .then((data) => {
                setUsers(data)
                console.log(data)
            })
    }

    function deleteUser(id) {
        fetch(API_URL + `/${id}`, {
            method: 'DELETE',
        }).then(() => getUsers())
    }

    function postNewUser(e) {
        e.preventDefault()
        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: newUserName,
                jobTitle: newUserJobTitle,
                companyName: newUserCompanyName,
            }),
        }).then(() => getUsers())
    }

    function updateUser(e, userObject) {
        e.preventDefault()

        let updatedUserObject = {
            ...userObject,
            name: updatedUserName,
            jobTitle: updatedJobTitle,
            companyName: updatedCompanyName,
        }

        fetch(`${API_URL}/${userObject.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUserObject),
        }).then(() => getUsers())
    }

    return (
        <div className="App">
            <form>
                <h3>POST new user form</h3>
                <label>Name</label>
                <input onChange={(e) => setNewUserName(e.target.value)}></input><br>
                <label>Job Title</label>
                <input onChange={(e) => setNewUserJobTitle(e.target.value)}></input><br>
                <label>Company Name</label>
                <input onChange={(e) => setNewUserCompanyName(e.target.value)}></input><br>
                <button onClick={(e) => postNewUser(e)}>Submit</button>
            </form>

            {users.map((user, index) => (
                <div className="mapContainer" key={index}>
                    <div>
                        Name: {user.name} <br></br>
                        Job Title: {user.jobTitle} <br></br>
                        Company Name: {user.companyName} <br></br>
                        <button onClick={() => deleteUser(user.id)}>🗑</button>
                    </div>
                    <form>
                        <label>Update Name</label>
                        <input
                            onChange={(e) => setUpdatedUserName(e.target.value)}
                        ></input>
                        <br></br>
                        <label>Update Job Title</label>
                        <input
                            onChange={(e) => setUpdatedJobTitle(e.target.value)}
                        ></input>
                        <br></br>
                        <label>Update Company Name</label>
                        <input
                            onChange={(e) => setUpdatedCompanyName(e.target.value)}
                        ></input>
                        <br></br>
                        <button onClick={(e) => updateUser(e, user)}>Update</button>
                    </form>
                </div>
            ))}
        </div>
    )
}

export default App