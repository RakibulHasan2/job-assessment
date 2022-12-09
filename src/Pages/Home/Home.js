import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from './../../firebase/firebaseConfig';
import UserInfo from '../UserInfo/UserInfo';
import AddUser from './AddUser/AddUser';
import { toast } from 'react-hot-toast';
import UpdateUser from './UpdateUser/UpdateUser';
import WordFInd from './WordFind/WordFInd';
const Home = () => {
    const [users, setUsers] = useState([])
    const [id, setId] = useState('')
    const userCollection = collection(db, "users")

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollection);
            setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        getUsers();
        console.log(users)
    }, [])

    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id)
        await deleteDoc(userDoc)
        toast.success("Delete Successfully")
        window.location.reload()
    }
    const updateUser = async (id, updates) => {
        console.log(updates)
        const userDoc = doc(db, "users", id);
        // console.log(userDoc)
        const newAge = {
            // name: updates.name,
            // email: updates.email,
            name: updates.name
        };
        await updateDoc(userDoc, newAge);

    }
    // console.log(id)
    return (
        <div>
            <div className='flex justify-evenly'>
                <AddUser
                    userCollection={userCollection}
                ></AddUser>
                <WordFInd>

                </WordFInd>
            </div>
            <h1 className='text-3xl font-bold text-center mt-10'>Here is All the Users Info</h1>
            <div className='mt-4 mb-6 grid grid-cols-3 ml-10 gap-5'>
                {
                    users.map(user => <UserInfo
                        key={user.id}
                        user={user}
                        deleteUser={deleteUser}
                        updateUser={updateUser}
                        setId={setId}
                    ></UserInfo>)
                }
            </div>
            <div>
                {
                    <UpdateUser
                        updateUser={updateUser}
                        id={id}
                    ></UpdateUser>
                }
            </div>
        </div>
    );
};

export default Home;