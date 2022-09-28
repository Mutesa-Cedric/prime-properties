// imports
import { useState, ReactNode, createContext, useContext, useMemo, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  User,
  UserCredential,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { auth } from "../config/firebase";
import { useRouter } from "next/router"

// types
interface AuthProviderProps {
  children: ReactNode
}

interface IAuth {
  user: User | null,
  signupWithEmail: (fullName: string, email: string, password: string) => Promise<void>,
  loginWithEmail: (email: string, password: string) => Promise<void>,
  logout: () => Promise<void>,
  error: string | null,
  loading: boolean
}

// context
const AuthContext = createContext<IAuth>({
  user: null,
  signupWithEmail: async () => { },
  loginWithEmail: async () => { },
  logout:async () => {},
  error: null,
  loading: false
})


// provider
export function AuthProvider({ children }: AuthProviderProps) {

  // initialize router
  const router = useRouter();

  // states
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // signup
  const signupWithEmail = async (fullName: string, email: string, password: string) => {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
    } catch (error) {
      console.log(error);
    }
  };

  // login
  const loginWithEmail = async (email: string, password: string) => {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      setLoading(false);

    } catch (error: any) {
      setError(error.message);
    }
  };

  // logout
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  // onAuthStateChanged(when a user is logged in or out)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);


  // }, [auth])
  const memoedValue = useMemo(() => ({
    user, signupWithEmail, loginWithEmail, error, logout, loading
  }), [user,loading,error])
  return (
    <AuthContext.Provider value={memoedValue}>
      {children}
    </AuthContext.Provider >
  )
}

// hook
export default function useAuth() {
  return useContext(AuthContext)
}