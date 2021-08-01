import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext)

export function AuthProvider( { children } ) {
    const [currentUser, setCurrentUser] = useState()
    const signup = (email, password) => auth.createUserWithEmailAndPassword(email, password);
    const login = (email, password) => auth.signInWithEmailAndPassword(email, password);
    const signout = (email, password) => auth.signOut();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        });

        return unsubscribe
    }, [])
    

    const value = {
        currentUser,
        signup,
        login,
        signout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}