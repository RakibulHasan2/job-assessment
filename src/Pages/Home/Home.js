import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from './../../firebase/firebaseConfig';
import UserInfo from '../UserInfo/UserInfo';
import AddUser from './AddUser/AddUser';
const Home = () => {
    const [users, setUsers] = useState([])
    const userCollection = collection(db, "users")
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollection);
            setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        getUsers();
        console.log(users)
    }, [])
    return (
        <div>
            <AddUser
            userCollection = {userCollection}
            ></AddUser>
            <h1 className='text-3xl font-bold text-center mt-10'>Here is All the Users Info</h1>
            <div className='mt-4 mb-6 grid grid-cols-3 ml-10 gap-5'>
                {
                    users.map(user => <UserInfo
                        key={user.id}
                        user={user}
                    ></UserInfo>)
                }
            </div>
        </div>
    );
};

export default Home;