import React, { useState } from 'react';
import { addDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
const AddUser = ({userCollection}) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const createUser = async () =>{
        await addDoc(userCollection, {name:name, email:email, age:age})
        toast.success("Added Successfully")
        window.location.reload()
    }
    return (
        <div>
            <h1 className='text-3xl font-bold text-center'>Add A User</h1>
            <div className='flex justify-center mt-4'>
                <div className='flex flex-col'>
                    <input className='bg-slate-200 rounded-xl mb-4 p-3' type="text" placeholder='name...' 
                    onChange={event =>{
                        setName(event.target.value)
                    }} 
                    />
                    <input className='bg-slate-200 rounded-xl mb-4 p-3' type="text" placeholder='email...'
                     onChange={event =>{
                        setEmail(event.target.value)
                    }}  />
                    <input className=' bg-slate-200 rounded-xl mb-4 p-3' type="text" placeholder='age...'
                     onChange={event =>{
                        setAge(event.target.value)
                    }}  />
                    <button onClick={createUser} className=' btn bg-primary'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default AddUser;