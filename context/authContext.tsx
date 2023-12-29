'use client'
import { useContext, createContext, useState, useEffect } from "react";
import {
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import {createUser} from "@/actions/user.action";

export const AuthContext = createContext<any>(null);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    // State
    const [user, setUser] = useState<any>(null);

    // Functions
    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log('user created with google ',result)
            const params = {
              name:result.user?.displayName,
              email:result.user?.email, 
              password:'created by google',
              photoURL:result.user?.photoURL
            }
           const isLog:any =  createUser(params);
           if(isLog){
            setUser(result.user);
           }
           
        } catch (error) {
            console.error('Google Sign In Error:', error);
        }
    };
    const githubSignIn = async () => {
        const provider = new GithubAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log('user created with github ', result)
            const params = {
                name: result.user?.displayName, 
                email: result.user?.email, 
                password: 'created by github',
                photoURL: result.user?.photoURL
            }
            const isLog: any = createUser(params);
            if (isLog) {
                setUser(result.user);
            }
        } catch (error) {
            console.error('Google Sign In Error:', error);
        }
    };

    const createUserWithPassword = async (name:string,email:string, password:string) => {
        try {
            const userWithPassword: any = await createUserWithEmailAndPassword(auth, email, password);
            if (userWithPassword) {
                const params = {
                    name, email, password,
                    photoURL: null
                }
                const isLog: any = createUser(params);
                if (isLog) {
                    setUser(userWithPassword);
                    return true;
                } else {
                    return false;
                }
            } else {
                console.log('Some error ')
            }
        } catch (error) {
            console.log(error);
            return false;
        }
       
    }

    const signInUser = async(email:string, password:string) => {
        try {
            const logUser = await signInWithEmailAndPassword(auth, email, password);
            setUser(logUser);
            console.log('log validite ', logUser);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    const logOut = () => {
        signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, createUserWithPassword, signInUser, githubSignIn, googleSignIn, logOut }}>
    { children }
    </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    const context = useContext(AuthContext);
    return context;
};
