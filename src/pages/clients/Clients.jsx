import React, { useContext } from 'react';
import { LayoutDashBoard } from '../../shared/layout';
import { ButtonSubmit, Header, TextField } from '../../shared/components';
import { useForm } from 'react-hook-form';
import { UserServices, clientSchema } from '../../shared/services';
import { yupResolver } from '@hookform/resolvers/yup';
import * as S from './styles';
import { AuthContext } from '../../shared/context/Auth';

export const Clients = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(clientSchema),
  });

  const HandleCreate = async (res) => {
    const data = { ...res, uid: user.uid };
    await UserServices.createClient(data);
  };

  return (
    <LayoutDashBoard>
      <Header title="Clientes" />
      <S.Form onSubmit={handleSubmit(HandleCreate)}>
        <S.Title>Cadastrar Cliente</S.Title>
        <S.Box>
          <TextField
            label="Nome"
            placeholder="Insira o nome do cliente"
            type="text"
            name="name"
            {...register('name')}
          />
          <TextField
            label="CNPJ"
            placeholder="Insira o CNPJ"
            name="cnpj"
            type="text"
            {...register('cnpj')}
          />
          <TextField
            label="Endereço"
            placeholder="Insira o endereço da empresa"
            name="adress"
            type="text"
            {...register('adress')}
          />
          <TextField
            label="Email"
            placeholder="email@email.com"
            name="email"
            type="text"
            {...register('email')}
          />
          <TextField
            label="Telefone"
            placeholder="Insira  um número para contato"
            name="telefone"
            type="text"
            {...register('telefone')}
          />
        </S.Box>

        <ButtonSubmit type="submit">Cadastrar</ButtonSubmit>
      </S.Form>
    </LayoutDashBoard>
  );
};
