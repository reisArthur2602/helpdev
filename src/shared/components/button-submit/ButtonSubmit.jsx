import React from 'react';
import * as S from './styles';

export const ButtonSubmit = ({ children, type = 'submit' }) => {
  return <S.Button type={type}>{children}</S.Button>;
};
