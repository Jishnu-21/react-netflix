import { createContext, useContext, useEffect, useState } from "react";
import { auth ,db} from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";


import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true); 


    function signUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            await setDoc(doc(db, 'users', user.uid), {
                email: user.email,
                savedShows: []
            });
        })
        .catch((error) => {
            console.error("Error signing up:", error);
        });
    }
    
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function UserAuth() {
    return useContext(AuthContext);
}
