import {useState,useEffect} from 'react'
import User from './User';
export default function Users(){
    const [users,setUsers]= useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then (res=>res.json())
        .then (data=>setUsers(data)) 
    },[])
    
    return (
        <div>
            <h1>Users are Here.</h1>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
            
        </div>       
    )
}