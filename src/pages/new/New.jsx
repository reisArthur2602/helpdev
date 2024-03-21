import React, { useEffect, useState } from 'react';
import { UserServices, orderSchema } from '../../shared/services';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { LayoutDashBoard } from '../../shared/layout';
import { ButtonSubmit, Header } from '../../shared/components';
import { SelectField } from './select-field/SelectField';
import { TextareaField } from './textarea-field/TextareaField';
import * as S from './styles';

export const New = () => {
  const [getClients, setGetClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      await UserServices.getClients(setGetClients);
    };
    fetchClients();
  }, []);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(orderSchema) });

  const HandleCreate = async (data) => {
    await UserServices.createOrder(data);
  };

  return (
    <LayoutDashBoard>
      <Header title="Chamados" />
      <S.Form onSubmit={handleSubmit(HandleCreate)}>
        <S.Title>Criar Chamado</S.Title>
        <S.Box>
          <SelectField label="Cliente*" name="client" {...register('client')}>
            <option value="">Escolha uma das opções</option>
            {getClients.map((client) => (
              <option key={client.id}>{client.name}</option>
            ))}
          </SelectField>

          <SelectField label="Status*" name="status" {...register('status')}>
            <option value="">Escolha uma das opções</option>
            <option value="Em Progresso">Em Progresso</option>
            <option value="Em Aberto">Em Aberto</option>
            <option value="Finalizado">Finalizado</option>
          </SelectField>

          <SelectField label="Assunto*" name="subject" {...register('subject')}>
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
          <ButtonSubmit type="submit">Criar</ButtonSubmit>
        </S.Box>
      </S.Form>
    </LayoutDashBoard>
  );
};
