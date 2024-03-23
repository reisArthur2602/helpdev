import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Clients, New, Order, Profile, SignIn, SignOut } from '../pages';
import { Private } from './Private';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignOut />} />

    
        <Route path="/order" element={<Private><Order/></Private>} />
        <Route path="/order/new" element={<Private><New/></Private>} />
        <Route path="/order/edit/:id" element={<Private><New/></Private>} />
        <Route path="/clients" element={<Private><Clients/></Private>} />
        <Route path="/profile" element={<Private><Profile/></Private>} />
     
      <Route path="*" element={<SignIn />} />
    </Routes>
  );
};
