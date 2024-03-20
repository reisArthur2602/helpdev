import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { createContext } from 'react';
import { auth, db } from '../services/firebase/conn';
import { doc, setDoc } from 'firebase/firestore';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const HandleRegister = async (email, password, username) => {
    await createUserWithEmailAndPassword(auth, email, password).then(
      async (res) => {
        const data = {
          uid: res.user.uid,
          username,
          email: res.user.email,
          avatarUrl: null,
        };

        await setDoc(doc(db, 'users', data.uid), data)
          .then(() => {
            setUser(data);
            localStorage.setItem('@user', JSON.stringify(data));
            console.log('usuário criado com sucesso');
          })
          .catch((err) => console.error('Usuário já cadastrado', err));
      }
    );
  };

  return (
    <AuthContext.Provider value={{ signed: !!user, HandleRegister }}>
      {children}
    </AuthContext.Provider>
  );
};
