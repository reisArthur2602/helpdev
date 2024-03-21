import React from 'react';
import * as S from './styles';
import { Sidebar } from './sidebar/Sidebar';

export const LayoutDashBoard = ({ children }) => {
  return (
    <S.Container>
      {/* sidebar */}
      <Sidebar />
      {/* content */}
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};
