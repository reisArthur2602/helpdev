import React, { useContext, useState } from 'react';
import * as S from './styles';

import { LayoutSign } from '../../shared/layout';
import { TextField, ButtonSubmit } from '../../shared/components';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../shared/context/Auth';

export const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // const navigate = useNavigate();

  const { HandleLogin } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await HandleLogin(email, password);
  };

  return (
    <LayoutSign>
      {/* title */}
      <div>
        <S.H1>Login</S.H1>
        <span>Digite seu e-mail e senha para entrar!</span>
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
        <ButtonSubmit>Entrar</ButtonSubmit>
      </S.Form>
      {/* link */}
      <S.Span>
        Não possui uma conta? <NavLink to="/register">CADASTRE-SE</NavLink>
      </S.Span>
    </LayoutSign>
  );
};
