import React from 'react';
import * as S from './styles';

export const ButtonSubmit = ({ children, ...props }) => {
  return <S.Button {...props}>{children}</S.Button>;
};
