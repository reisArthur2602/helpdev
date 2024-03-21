import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/conn';

export const UserServices = {
  createClient: async (data) => {
    await addDoc(collection(db, 'clients'), data)
      .then(() => console.log('cliente cadastrado com sucesso'))
      .catch((err) => console.error(err));
  },
  getClients: async (setState) => {
    const clientRef = collection(db, 'clients');
    await getDocs(clientRef).then((data) => {
      let clients = [];

      data.forEach((doc) =>
        clients.push({
          id: doc.id,
          name: doc.data().name,
        })
      );

      setState(clients);
    });
  },
  createOrder: async (data) => {
    await addDoc(collection(db, 'orders'), data)
      .then(() => console.log('Chamado cadastrado com sucesso'))
      .catch((err) => console.error(err));
  },
};
