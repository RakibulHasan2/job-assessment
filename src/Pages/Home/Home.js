import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore"; 
import { db } from './../../firebase/firebaseConfig';
const Home = () => {
    const [users, setUsers] = useState([])
    const userCollection = collection(db, "users")
    useEffect(() => {
        const getUsers = async () => {
                 const data = await getDocs(userCollection);
                setUsers( data.docs.map(doc => ({...doc.data(), id: doc.id})))
        }
        getUsers();
        console.log(users)
    }, [])
    return (
        <div>
            <h1 className='text-3xl font-bold'>Here is All the Users Info</h1>
            <div className='border mt-4 mb-6'>
                {
                    users.map(user =>{
                        return <div>
                            <h1>User Name: {user.name}</h1>
                            <h1>User Email: {user.email}</h1>
                            <h1>User Age: {user.age}</h1>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Home;