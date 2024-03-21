import React, { forwardRef } from 'react';
import * as S from './styles';

export const TextField = forwardRef(({ label, ...props }, ref) => {
  return (
    <S.Label>
      {label}
      <S.Input {...props} ref={ref} />
    </S.Label>
  );
});
