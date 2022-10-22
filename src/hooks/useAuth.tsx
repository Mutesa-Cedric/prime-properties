// imports
import { useState, ReactNode, createContext, useContext, useMemo, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  User,
  UserCredential,
  onAuthStateChanged,
  signOut,
  signInWithPopup
} from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "../lib/firebase";
import { useRouter } from "next/router"
import { toast } from 'react-toastify';

// types
interface AuthProviderProps {
  children: ReactNode
}

interface IAuth {
  user: User | null,
  signupWithEmail: (fullName: string, email: string, password: string) => Promise<void>,
  signupWithGoogle: () => Promise<void>,
  signupWithFacebook: () => Promise<void>,
  loginWithGoogle: () => Promise<void>,
  loginWithFacebook: () => Promise<void>,
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
  signupWithGoogle: async () => { },
  signupWithFacebook: async () => { },
  loginWithGoogle: async () => { },
  loginWithFacebook: async () => { },
  logout: async () => { },
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

  // 1.email
  const signupWithEmail = async (fullName: string, email: string, password: string) => {
    try {
      setLoading(true);
      const userCredential: UserCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      setLoading(false);
      router.push('/')
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  // 2.google

  const signupWithGoogle = async () => {

    setLoading(true);
    await signInWithPopup(auth, googleProvider)
      .then(userCredentials => {
        setUser(userCredentials.user);
        router.push('/');
        setLoading(false);
      }).catch(err => {
        setError(err.message);
      }).finally(() => {
        setLoading(false);
      })
  }

  // 3.facebook

  const signupWithFacebook = async () => {
    setLoading(true);
    await signInWithPopup(auth, facebookProvider)
      .then(userCredentials => {
        setUser(userCredentials.user);
        router.push('/');
        setLoading(false);
      }).catch(err => {
        setError(err.message);
      }).finally(() => {
        setLoading(false);
      })
  }

  // login

  // 1.email
  const loginWithEmail = async (email: string, password: string, fallbackUrl?: string) => {
    try {
      setLoading(true);
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      setLoading(false);
      fallbackUrl ? router.push(`/${fallbackUrl}`) :
        router.push('/')
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  // 2.google

  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider).then(userCredentials => {
        setUser(userCredentials.user);
        setLoading(false);
        router.push('/');
      }).catch(err => {
        setError(err.message);
      }).finally(() => {
        setLoading(false);
      })
    } catch (error: any) {
      setError(error.message);
    }
  }

  // 3.facebook

  const loginWithFacebook = async () => {
    try {
      await signInWithPopup(auth, facebookProvider).then(userCredentials => {
        setUser(userCredentials.user);
        router.push('/');
      }).catch(err => {
        setError(err.message);
      }).finally(() => {
        setLoading(false);
      })
    } catch (error: any & { message: string }) {
      setError(error.message);
    }
  }


  // logout
  const logout = async () => {
    try {
      setLoading(true);
      await signOut(auth).then(() => {
        setUser(null);
        toast.success("Logged out successfully");
      }).catch(err => {
        setError(err.message);
      }).finally(() => {
        setLoading(false);
      })
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
  }, [auth]);

  const memoedValue = useMemo(() => ({
    user,
    signupWithEmail,
    loginWithEmail,
    error,
    logout,
    loading,
    signupWithFacebook,
    signupWithGoogle,
    loginWithGoogle,
    loginWithFacebook
  }), [user, loading, error])
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