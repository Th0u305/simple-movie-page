import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { firebaseAuth } from "../firebase/firebase.config";
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
import { useRef } from 'react';

const ContextProvider = ({ children }) => {

  const [movies, setMovies] = useState([])
  const [singleMovies, setSingleMovies] = useState([])
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [viewWallet, setViewWallet] = useState(false);
  const [viewProfile, setVieProfile] = useState(true);
  const [viewSetting, setViewSetting] = useState(false);
  const myRef = useRef(null)


  useEffect(()=>{
    fetch('https://movie-server-eight.vercel.app/allMovies')
    .then(res => res.json())
    .then(data =>setMovies(data))
  },[])


  // register or create account
  const createUser = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  // sign in method

  const signInUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(firebaseAuth, email, password)
}

  // check for current logged user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // sign out user
  const signOutUser = () => {
    setLoading(true)
    return signOut(firebaseAuth);
  };

  //  google pop up
  const signInWithGoogle = () => {
    return signInWithPopup(firebaseAuth, googleProvider);
  };

  
  // reset password 

  const resetUserPassword =(email)=>{
    return sendPasswordResetEmail(firebaseAuth, email)
  }

 // update user profile
  const updateUserProfile = (updateData) =>{
    return updateProfile(firebaseAuth.currentUser, updateData)
  }


  const contextData = {
 
    movies,
    singleMovies,
    setSingleMovies,
    signInWithGoogle,
    signOutUser,
    user,
    setUser,
    loading,
    setLoading,
    signInUser,
    createUser,
    updateUserProfile,
    resetUserPassword,
    myRef,
    viewProfile,
    setVieProfile,
    viewWallet,
    setViewWallet,
    viewSetting,
    setViewSetting
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
