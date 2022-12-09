import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const UpdateUser = ({ updateUser, id }) => {
const [updatedField, setUpdated] = useState([])
    const updateInfo = e => {
        e.preventDefault()
        const newAge = e.target.age.value
        const updated = {
            age: newAge
        }
        // console.log(updated)
        setUpdated(updated)
    }
    // console.log(updatedField)
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="update-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h1 className='text-red-700 text-2xl font-bold text-center'>Double Click To Update</h1>
                    <label htmlFor="update-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={updateInfo} className='grid grid-cols-1 gap-3 mt-10'>
                        <div className='flex justify-center mt-4'>
                            <div className='flex flex-col'>
                                <input name="age" className=' bg-slate-200 rounded-xl mb-4 p-3' type="text" placeholder='age...'
                                />
                                <button 
                                onClick={() => {
                                    updateUser(id, updatedField)
                                    }
                                    } 
                                    className=' btn bg-primary' type='submit' >Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateUser;