import React from 'react';
import * as S from './styles';

import { LayoutDashBoard } from '../../shared/layout';
import { Header } from '../../shared/components/header/Header';

export const Order = () => {
  return (
    <LayoutDashBoard>
      <Header title="chamados" />
      <div>Order</div>
    </LayoutDashBoard>
  );
};
