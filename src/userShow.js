import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Users from "./Users";

const UsersShow=(props)=>{
    const {id} = props.match.params
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) =>{
                const result = response.data
                setUser(result)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[])

    useEffect(()=>{
        axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response) =>{
                const result = response.data
                setPosts(result)
                // console.log('result',result);
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[])

    return (
        <div>
            <h1>USERNAME : {user.name}</h1>
            <h2>POSTS WRITTEN BY USERS</h2>
            <ul>
                {posts.map((post)=>{
                    return <li key={post.id}><Link to ={`/posts/${post.userId}`}>{post.title}</Link></li>
                })}
            </ul>
        </div>
    )
}

export default UsersShow