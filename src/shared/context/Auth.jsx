import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth, db } from '../services/firebase/conn';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('@user'));
    setUser(data);
    setLoading(false);
  }, []);

  const HandleRegister = async (email, password, username) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        const data = {
          uid: res.user.uid,
          username,
          email: res.user.email,
          avatarUrl: null,
        };

        await setDoc(doc(db, 'users', data.uid), data).then(() => {
          // atualiza user
          setUser(data);
          localStorage.setItem('@user', JSON.stringify(data));
          setLoading(false);

          // navegar para dashboard
          navigate('/order');
          console.log('usuário criado com sucesso');
        });
      })
      .catch((err) => {
        setLoading(false);
        console.error('Usuário já cadastrado', err);
      });
  };

  const HandleLogin = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        const uid = res.user.uid;
        const query = doc(db, 'users', uid);
        const getUser = await getDoc(query);
        // atualiza user
        setUser(getUser.data());
        localStorage.setItem('@user', JSON.stringify(getUser.data()));
        setLoading(false);

        // navegar para dashboard
        navigate('/order');
        console.log('Seja bem vindo');
      })
      .catch((err) => {
        setLoading(false);
        console.error('Email ou senha incorretos', err);
      });
  };

  const Logout = () => {
    signOut(auth);
    setUser(null);
    localStorage.clear();
    setLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        HandleRegister,
        HandleLogin,
        Logout,
        setUser,
        loading,
        user,
        signed: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
