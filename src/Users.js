import React,{useState,useEffect} from "react";
import axios from 'axios'
import {Link, Route} from 'react-router-dom'
import UsersShow from "./userShow";


const Users=(props)=>{

    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get('//jsonplaceholder.typicode.com/users')
            .then((response)=>{
                const result = response.data
                setUsers(result)
                // console.log(result);
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[])
    // console.log(users);
    return (
        <div>
            <h1>USER LIST : {users.length}</h1>
            <ul>
                {users.map((user)=>{
                    return (
                        <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                    )
                })}
            </ul>
            
        </div>
    )
}

export default Users