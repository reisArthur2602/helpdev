import React, { forwardRef } from 'react';

import * as S from './styles';

export const TextareaField = forwardRef(({ label, ...props }, ref) => {
  return (
    <S.Label>
      {label}
      <S.Textarea {...props} ref={ref} />
    </S.Label>
  );
});
