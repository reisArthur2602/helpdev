import React from 'react';
import * as S from './styles';

export const TextField = ({ label, ...props }) => {
  return (
    <S.Label>
      {label}
      <S.Input {...props} />
    </S.Label>
  );
};
