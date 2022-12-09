import React from 'react';

const UserInfo = ({ user, deleteUser, updateUser,setId }) => {
    return (
        <div className="card w-96 bg-gray-600 text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{user.name}</h2>
                <p>Email : {user.email}</p>
                <p>Age : {user.age}</p>
                <div className="card-actions justify-end">
                    <label onClick={() => setId(user.id)} htmlFor="update-modal" className="btn">Update</label>
                    <button onClick={() => { deleteUser(user.id) }} className="btn btn-success">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;