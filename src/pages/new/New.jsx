import React, { useContext, useEffect, useState } from 'react';
import { UserServices, orderSchema } from '../../shared/services';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { LayoutDashBoard } from '../../shared/layout';
import { ButtonSubmit, Header } from '../../shared/components';
import { SelectField } from './select-field/SelectField';
import { TextareaField } from './textarea-field/TextareaField';
import * as S from './styles';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../shared/context/Auth';

export const New = () => {
  const { user } = useContext(AuthContext);
  const [getClients, setGetClients] = useState([]);
  const [idCustomer, setIdCustomer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    return async () => {
      await UserServices.getClientsByUser(setGetClients, user.uid);
      if (id) {
        await UserServices.getClientsByID(id, setIdCustomer);
      }
    };
  }, []);
  const { handleSubmit, register } = useForm({
    resolver: yupResolver(orderSchema),
  });

  const HandleCreate = async (res) => {
    const data = { ...res, uid: user.uid };
    await UserServices.createOrder(data);
  };

  const HandleUpdate = async (data) => {
    await UserServices.updateOrders(id, data);
  };

  return (
    <LayoutDashBoard>
      <Header title="Chamados" />
      <S.Form onSubmit={handleSubmit(id ? HandleUpdate : HandleCreate)}>
        <S.Title>{id ? 'Editar Chamado' : 'Criar Chamado'} </S.Title>
        <S.Box>
          <SelectField label="Cliente" name="client" {...register('client')}>
            <option value="">Escolha uma das opções</option>
            <option>Cliente</option>
            {getClients.map((client) => (
              <option key={client.id}>{client.name}</option>
            ))}
          </SelectField>

          <SelectField label="Status" name="status" {...register('status')}>
            <option value="">Escolha uma das opções</option>
            <option value="Em Progresso">Em Progresso</option>
            <option value="Em Aberto">Em Aberto</option>
            <option value="Finalizado">Finalizado</option>
          </SelectField>

          <SelectField label="Assunto" name="subject" {...register('subject')}>
            <option value="">Escolha uma das opções</option>
            <option value="Suporte">Suporte</option>
            <option value="Financeiro">Financeiro</option>
            <option value="Instalação">Instalação</option>
          </SelectField>

          <TextareaField
            label="Complemento"
            placeholder="Descreva o problema (opcional)"
            name="complement"
            {...register('complement')}
          />
          <ButtonSubmit type="submit">{id ? 'Editar' : 'Criar'}</ButtonSubmit>
        </S.Box>
      </S.Form>
    </LayoutDashBoard>
  );
};
