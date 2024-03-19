import React from 'react';
import * as S from './styles';

import { LayoutSign } from '../../shared/layout';
import { TextField } from '../../shared/components';

export const SignIn = () => {
  return (
    <LayoutSign>
      {/* title */}
      <div>
        <S.H1>Login</S.H1>
        <span>Digite seu e-mail e senha para entrar!</span>
      </div>

      {/* form */}
      <form>
        <TextField label="Email" placeholder="email@email.com" type="text" name="email" />
      </form>
      {/* link */}
    </LayoutSign>
  );
};
