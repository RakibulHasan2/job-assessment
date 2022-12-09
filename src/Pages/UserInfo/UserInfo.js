import React from 'react';

const UserInfo = ({ user,deleteUser }) => {
    return (
        <div className="card w-96 bg-sky-700 text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{user.name}</h2>
                <p>Email : {user.email}</p>
                <p>Age : {user.age}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Update</button>
                    <button onClick={() => {deleteUser(user.id)}} className="btn btn-success">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;