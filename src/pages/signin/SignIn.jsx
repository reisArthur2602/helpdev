import React, { useContext } from 'react';
import * as S from './styles';

import { LayoutSign } from '../../shared/layout';
import { TextField, ButtonSubmit } from '../../shared/components';
import { NavLink } from 'react-router-dom';

export const SignIn = () => {
  return (
    <LayoutSign>
      {/* title */}
      <div>
        <S.H1>Login</S.H1>
        <span>Digite seu e-mail e senha para entrar!</span>
      </div>

      {/* form */}
      <S.Form>
        <TextField
          label="Email"
          placeholder="email@email.com"
          type="text"
          name="email"
        />
        <TextField
          label="Senha"
          placeholder="******"
          type="password"
          name="password"
        />
        <ButtonSubmit>Entrar</ButtonSubmit>
      </S.Form>
      {/* link */}
      <S.Span>
        Não possui uma conta? <NavLink to="/register">CADASTRE-SE</NavLink>
      </S.Span>
    </LayoutSign>
  );
};
