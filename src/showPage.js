import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const ShowPage=(props)=>{
    const {id} = props.match.params
    const [user, setUser] = useState([])
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])

        useEffect(()=>{
            axios.get(`//jsonplaceholder.typicode.com/users/${id}`)
                .then((response) =>{
                    const result = response.data
                    setUser(result)
                    // console.log('user',result);
                })
                .catch((err)=>{
                    alert(err.message)
                })
        },[id])

        useEffect(()=>{
            axios.get(`//jsonplaceholder.typicode.com/posts/${id}`)
                .then((response) =>{
                    const result = response.data
                    setPosts(result)
                    // console.log('result',result);
                })
                .catch((err)=>{
                    alert(err.message)
                })
        },[id])

        useEffect(()=>{
            axios.get(`//jsonplaceholder.typicode.com/comments?postId=${id}`)
                .then((response) =>{
                    const result = response.data
                    setComments(result)
                    // console.log('result',result);
                })
                .catch((err)=>{
                    alert(err.message)
                })
        },[id])

    return (
        <div>
            <h1>USERNAME : {user.name}</h1>
            <h3>TITLE : {posts.title}</h3>
            <h4>BODY : <br/> {posts.body}</h4>
            <hr/>
            <h2>COMMENTS :</h2>
            <ul>
                {comments.map((comment)=>{
                    return <li key = {comment.id}>{comment.body}</li>
                })}
            </ul>
            <hr/>
            <p>More posts of Author:<Link to={`/users/${user.id}`}>{user.name}</Link></p>
        </div>
    )
}

export default ShowPage