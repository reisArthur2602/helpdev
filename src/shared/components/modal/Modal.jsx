import React, { useContext } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import * as S from './styles';

export const Modal = ({ isOpen, infos, onClick }) => {
  if (isOpen) {
    return (
      <S.OverLay>
        <S.Card>
          <S.Wrapper>
            <S.Title>Detalhes do Chamado</S.Title>
            <button onClick={onClick}>
              <HiOutlineX size={24} color="#F9FAFB" />
            </button>
          </S.Wrapper>
          <S.Box>
            <S.Info>
              <strong>ID:</strong>
              {infos.id}
            </S.Info>
            <S.Info>
              <strong>Clientes:</strong>
              {infos.client}
            </S.Info>
            <S.Info>
              <strong>Assunto:</strong>
              {infos.subject}
            </S.Info>
            <S.Info>
              <strong>Data:</strong>
              {infos.date}
            </S.Info>
            <S.Info>
              <strong>Status:</strong>
              {infos.status}
            </S.Info>
            {infos.complement && (
              <S.Info>
                <strong>Complemento:</strong>
                {infos.complement}
              </S.Info>
            )}
          </S.Box>
        </S.Card>
      </S.OverLay>
    );
  }
  // return (
  // );
};
