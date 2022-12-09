import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn, signInPopUp,updateUser } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email)
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }
    const googleSignIn = () => {
        setLoginError('');
        signInPopUp()
        // console.log(signInPopUp)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: user.displayName,
                    email: user.email,
                }
               
                updateUser(userInfo)
                .then(() => {
                    // saveUser(user.displayName, user.email)
                })
                .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error.message)
            });
    }
    // const saveUser = (name, email) => {
    //     const user = { name, email};
    //     // console.log(user);
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
    //             setLoginUserEmail(email)
    //         })
    // }

    return (
        <div className='lg:flex justify-center items-center'>
            <div>
                <img className='w-96 h-1/3' src="https://clipart.world/wp-content/uploads/2020/06/guy-doing-homework-with-laptop-1.jpg" alt="" srcSet="" />
            </div>
            <div className='w-96 p-7'>
                <h2 className='text-3xl text-sky-500 font-bold text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn bg-blue-600 w-full' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>New to This Website? <Link className='text-sky-500 font-bold' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={googleSignIn} className='btn btn-outline w-full'>Continue With Google <FcGoogle className='ml-3'></FcGoogle></button>
            </div>
        </div>
    );
};

export default Login;