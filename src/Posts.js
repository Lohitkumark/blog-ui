import React,{useState, useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

const Posts=(props)=>{
    const [posts, setPosts]= useState([])

    useEffect(()=>{
        axios.get(`//jsonplaceholder.typicode.com/posts`)
            .then((response) =>{
                const result = response.data
                setPosts(result)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[])

    return (
        <div>
            <h1>TOTAL POSTS -{posts.length}</h1>
            <ul>
                {posts.map((post)=>{
                    return <li key={post.id}><Link to={`/posts/${post.userId}`}><b>{post.title}</b></Link></li>
                })}
            </ul>
            
        </div>
    )
}

export default Posts