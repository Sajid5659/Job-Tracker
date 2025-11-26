import React,{ useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { createUser, setUser, updateUser, googleSignIn } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (!/[A-Z]/.test(password)) {
            setPasswordError("Password must contain at least one uppercase letter.");
            return;
        }
        if (!/[a-z]/.test(password)) {
            setPasswordError("Password must contain at least one lowercase letter.");
            return;
        }
        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long.");
            return;
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        navigate("/");
                    });
            })
            .catch((error) => console.error(error));
    };

    const handleGoogleRegister = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate("/");
            })
            .catch(error => console.error(error));
    };

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Register Your Account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input name="name" type="text" className="input" placeholder="Name" required />

                        <label className="label">Photo URL</label>
                        <input name="photo" type="text" className="input" placeholder="Photo URL" />

                        <label className="label">Email</label>
                        <input name="email" type="email" className="input" placeholder="Email" required />

                        <label className="label">Password</label>
                        <input name="password" type="password" className="input" placeholder="Password" required />

                        <div><a className="link link-hover">Forgot password?</a></div>

                        {passwordError && (
                            <p className="bg-red-500 text-white text-center p-1 rounded mt-2">
                                {passwordError}
                            </p>
                        )}

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>

                        <button 
                            type="button" 
                            onClick={handleGoogleRegister} 
                            className="btn btn-outline mt-2"
                        >
                            Continue with Google
                        </button>

                        <p>Already have an account?
                            <Link className='text-blue-600 font-semibold' to='/auth/login'>Login</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;
