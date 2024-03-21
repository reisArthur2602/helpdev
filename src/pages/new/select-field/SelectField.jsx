import React, { forwardRef } from 'react';
import * as S from './styles';

export const SelectField = forwardRef(({ label, children, ...props }, ref) => {
  return (
    <S.Label>
      {label}
      <S.Select {...props} ref={ref}>
        {children}
      </S.Select>
    </S.Label>
  );
});
