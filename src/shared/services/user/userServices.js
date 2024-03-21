import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/conn';

export const UserServices = {
  createClient: async (data) => {
    await addDoc(collection(db, 'clients'), data)
      .then(() => console.log('cliente cadastrado com sucesso'))
      .catch((err) => console.error(err));
  },
};


