import React, { useContext, useState } from 'react';
import * as S from './styles';

import { LayoutSign } from '../../shared/layout';
import { TextField, ButtonSubmit } from '../../shared/components';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../shared/context/Auth';

export const SignOut = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  // const navigate = useNavigate();

  const { HandleRegister } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await HandleRegister(email, password, username)
     
   
  };

  return (
    <LayoutSign>
      {/* title */}
      <div>
        <S.H1>Cadastrar</S.H1>
        <span>Digite seu e-mail e senha para se cadastrar!</span>
      </div>

      {/* form */}
      <S.Form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          placeholder="email@email.com"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Senha"
          placeholder="******"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Usuário"
          placeholder="Insira um nome de usuário"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
