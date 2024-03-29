import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';

import { db } from '../firebase/conn';
import { getDateNow } from '../utils/utils';

export const UserServices = {
  createClient: async (data) => {
    await addDoc(collection(db, 'clients'), data)
      .then(() => console.log('cliente cadastrado com sucesso'))
      .catch((err) => console.error(err));
  },
  getClientsByUser: async (setState, uid) => {
    const clientRef = collection(db, 'clients');

    const q = query(clientRef, where('uid', '==', uid));

    onSnapshot(q, (data) => {
      let clients = [];

      data.forEach((doc) => {
        clients.push({
          id: doc.id,
          name: doc.data().name,
        });
      });

      setState(clients);
    });
  },

  getClientsByID: async (id, setState) => {
    const clientRef = doc(db, 'orders', id);
    await getDoc(clientRef).then((data) => setState(data.data()));
  },

  createOrder: async (data) => {
    await addDoc(collection(db, 'orders'), data)
      .then(() => console.log('Chamado cadastrado com sucesso'))
      .catch((err) => console.error(err));
  },
  getOrdersByUser: async (setState, uid) => {
    const orderRef = collection(db, 'orders');

    const q = query(orderRef, where('uid', '==', uid));

    onSnapshot(q, (data) => {
      let orders = [];

      data.forEach((doc) => {
        orders.push({
          id: doc.id,
          client: doc.data().client,
          subject: doc.data().subject,
          date: getDateNow(),
          status: doc.data().status,
          complement: doc.data().complement,
        });
      });

      setState(orders);
    });
  },
  updateOrders: async (id, data) => {
    const orderRef = doc(db, 'orders', id);
    await updateDoc(orderRef, data).then(() =>
      console.log('atualizado com sucesso')
    );
  },
  deleteOrders: async (id) => {
    const orderRef = doc(db, 'orders', id);
    await deleteDoc(orderRef);
  },
};
