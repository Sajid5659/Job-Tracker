import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
export const AuthContext = createContext();

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    };

    const updateUser = (updateData)=>{
        return updateProfile(auth.currentUser,updateData);
    }

    const logOut = () => {
        return signOut(auth);
         
    }
    const googleSignIn = (()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    })

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return()=>{
            unSubscribe();
        }
    },[])

    const authData ={
        user,
        setUser,
        createUser,
        signIn,
        logOut,
        loading,
        setLoading,
        updateUser,
        googleSignIn
    };
    return (
    <AuthContext.Provider value={authData}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;