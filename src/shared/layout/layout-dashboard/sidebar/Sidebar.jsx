import React, { useEffect, useState } from 'react';
import Logo from '../../../../assets/logo.svg';
import * as S from './styles';
import { NavItem } from './navitem/NavItem';
import {
  HiOutlineCursorClick,
  HiOutlineUser,
  HiAdjustments,
  HiOutlineLogout,
} from 'react-icons/hi';

export const Sidebar = () => {
  return (
    <S.Sidebar>
      <S.Navbar>
        {/* logo */}
        <img src={Logo} alt="logo helpdev!" />
        {/* navlinks */}
        <S.List>
          <li>
            <NavItem path="/order">
              <HiOutlineCursorClick size={20} /> Chamados
            </NavItem>
          </li>
          <li>
            <NavItem path="/clients">
              <HiOutlineUser size={20} />
              Clientes
            </NavItem>
          </li>
          <li>
            <NavItem path="/profile">
              <HiAdjustments size={20} />
              Perfil
            </NavItem>
          </li>
        </S.List>
      </S.Navbar>

      {/* logout */}
      <S.ButtonLogout>
        <HiOutlineLogout size={20} />
        Sair
      </S.ButtonLogout>
    </S.Sidebar>
  );
};
