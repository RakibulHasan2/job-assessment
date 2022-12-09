import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { useForm } from 'react-hook-form';
const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('')
    const navigate = useNavigate();
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignUp = data => {
        // console.log(data);
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log("user is", user);
                alert('User Created Successfully.')
                const userInfo = {
                    displayName: data.name,
                    email: data.email,
                    role: data.role
                }
                console.log(userInfo)
                updateUser(userInfo)
                    .then(() => {
                        // saveUser(data.name, data.email, data.role)
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });


        // const saveUser = (name, email, role) => {
        //     const user = { name, email, role };
        //     fetch('https://b612-used-products-resale-server-side-rakibul-hasan2-main.vercel.app/users', {
        //         method: 'POST',
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(user)
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             // console.log('save user',data)

        //             setCreatedUserEmail(email)  
        //         })
        // }
    }

    return (
        <div className='lg:flex justify-center items-center'>
            <div>
                <img className='w-96 h-1/3' src="https://clipart.world/wp-content/uploads/2020/06/guy-doing-homework-with-laptop-1.jpg" alt="" srcSet="" />
            </div>
            <div className='w-96 p-7'>
                <h2 className='text-3xl text-center text-sky-500 font-bold'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <input className='btn bg-blue-600  w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account <Link className='text-sky-500 font-bold' to="/login">Please Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;