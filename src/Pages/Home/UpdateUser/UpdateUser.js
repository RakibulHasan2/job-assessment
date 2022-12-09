import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const UpdateUser = ({ updateUser, id }) => {
const [updatedField, setUpdated] = useState([])
    const updateInfo = e => {
        e.preventDefault()
        const newName = e.target.name.value
        const newEmail = e.target.email.value
        const newAge = e.target.age.value
        const updated = {
            name: newName,
            email: newEmail,
            age: newAge
        }
        // console.log(updated)
        setUpdated(updated)
        e.target.reset()
        toast.success("Updated Done")
        window.location.reload()
    }
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="update-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="update-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={updateInfo} className='grid grid-cols-1 gap-3 mt-10'>
                        <div className='flex justify-center mt-4'>
                            <div className='flex flex-col'>
                                <input name="name" className='bg-slate-200 rounded-xl mb-4 p-3' type="text" placeholder='name...'

                                />
                                <input name="email" className='bg-slate-200 rounded-xl mb-4 p-3' type="text" placeholder='email...'
                                />
                                <input name="age" className=' bg-slate-200 rounded-xl mb-4 p-3' type="text" placeholder='age...'
                                />
                                <button type='submit' 
                                onClick={() => {
                                    updateUser(id, updatedField)
                                    }
                                    } 
                                    className=' btn bg-primary'>Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateUser;