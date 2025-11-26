import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
    const {signIn,googleSignIn, setUser}= use(AuthContext);
    const [error, setError] = useState()
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then((result) => {
                // Signed up 
                const user = result.user;
                console.log(user);
                navigate(`${location.state? location.state : "/"}`)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode);
                // console.log(errorCode, errorMessage)
                // // ..
            });
    }
    const handleGoogleLogin = () => { googleSignIn() .then(result => { const user = result.user; setUser(user); navigate("/"); }) .catch(error => console.error(error)); };

    return (
  <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Login Your Account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" 
                        required/>
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" 
                        required/>
                        <div><a className="link link-hover">Forgot password?</a></div>

                        {error && <p className='bg-red-400 text-white text-center p-1'>{error}</p>}

                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <button type="button" onClick={handleGoogleLogin} className="btn btn-outline mt-2" ><FcGoogle size={25} /> Continue with Google </button>
                        <p>Don't have an account? <Link className='text-blue-600 font-semibold' to='/auth/register'>Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;