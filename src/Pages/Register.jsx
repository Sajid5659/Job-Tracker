import React,{ use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';


const Register = () => {
    const {createUser,setUser,updateUser}= use(AuthContext);
    const navigate = useNavigate();
    const handleRegister = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email,password)
        .then((result)=>{
            const user = result.user;
            updateUser({displayName:name , photoURL : photo})
            .then(()=>{
                setUser({...user,displayName:name , photoURL : photo});
                navigate("/");
            })
            .catch((error)=>{
                // console.log(error);
                // setUser(user);
            })
            
        })
        .catch((error)=> {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log(errorCode, errorMessage)
                // ..
            });
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Register Your Account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input name="name" type="text" className="input" placeholder="Name"
                            required />
                        <label className="label">Photo URL</label>
                        <input name="photo" type="text" className="input" placeholder="Photo URL"
                             />
                        <label className="label">Email</label>
                        <input name="email" type="email" className="input" placeholder="Email"
                            required />
                        <label className="label">Password</label>
                        <input name="password" type="password" className="input" placeholder="Password"
                            required />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p>Already have an account?
                        <Link className='text-blue-600 font-semibold' to='/auth/login'>Login</Link> </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;