import React from 'react';
import * as S from './styles';

import { LayoutSign } from '../../shared/layout';
import { TextField, ButtonSubmit } from '../../shared/components';
import { NavLink } from 'react-router-dom';

export const SignOut = () => {
  return (
    <LayoutSign>
      {/* title */}
      <div>
        <S.H1>Cadastrar</S.H1>
        <span>Digite seu e-mail e senha para se cadastrar!</span>
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
        <TextField
          label="Usuário"
          placeholder="Insira um nome de usuário"
          type="text"
          name="username"
        />
        <ButtonSubmit>Cadastrar</ButtonSubmit>
      </S.Form>
      {/* link */}
      <S.Span>
        Já possui uma conta? <NavLink to="/">FAÇA LOGIN</NavLink>
      </S.Span>
    </LayoutSign>
  ); 
};
