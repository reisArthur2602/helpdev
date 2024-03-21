import React from 'react';
import { LayoutDashBoard } from '../../shared/layout';
import { ButtonSubmit, Header, TextField } from '../../shared/components';
import * as S from './styles';
export const Clients = () => {
  return (
    <LayoutDashBoard>
      <Header title="Clientes" />
      <S.Form>
        <S.Title>Cadastrar Cliente</S.Title>
        <S.Box>
          <TextField
            label="Nome"
            placeholder="Insira o nome do cliente"
            type="text"
            name="name"
          />
          <TextField
            label="CNPJ"
            placeholder="Insira o CNPJ"
            name="cnpj"
            type="text"
          />
          <TextField
            label="Endereço"
            placeholder="Insira o endereço da empresa"
            name="adress"
            type="text"
          />
          <TextField
            label="Email*"
            placeholder="email@email.com"
            name="email"
            type="text"
          />
          <TextField
            label="Telefone"
            placeholder="Insira  um número para contato"
            name="telefone"
            type="text"
          />
        </S.Box>
        <ButtonSubmit type="submit">Cadastrar</ButtonSubmit>
      </S.Form>
    </LayoutDashBoard>
  );
};
