import React from 'react';

import { LayoutDashBoard } from '../../shared/layout';
import { Header } from '../../shared/components';
import * as S from './styles';

export const Order = () => {
  return (
    <LayoutDashBoard>
      <Header title="chamados" />
      <div>Order</div>
    </LayoutDashBoard>
  );
};
