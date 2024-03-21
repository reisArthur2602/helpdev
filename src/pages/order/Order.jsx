import React from 'react';

import { LayoutDashBoard } from '../../shared/layout';
import { ButtonSubmit, Header } from '../../shared/components';
import { useNavigate } from 'react-router-dom';
import {
  HiOutlinePlusCircle,
  HiOutlinePencilAlt,
  HiOutlineSearch,
} from 'react-icons/hi';

import * as S from './styles';

export const Order = () => {
  const navigate = useNavigate();

  return (
    <LayoutDashBoard>
      <Header title="chamados" />
      <S.Section>
        <ButtonSubmit
          onClick={() => {
            navigate('/order/new');
          }}
        >
          <HiOutlinePlusCircle size={20} />
          Novo Chamado
        </ButtonSubmit>

        {/* table */}
        <S.Table>
          {/* header */}
          <S.THead>
            <tr>
              <S.HeaderContent scope="col">Id</S.HeaderContent>
              <S.HeaderContent scope="col">Cliente</S.HeaderContent>
              <S.HeaderContent scope="col">Assunto</S.HeaderContent>
              <S.HeaderContent scope="col">Data</S.HeaderContent>
              <S.HeaderContent scope="col">Status</S.HeaderContent>
              <S.HeaderContent scope="col">#</S.HeaderContent>
            </tr>
          </S.THead>
          {/* row */}
          <tbody>
            <S.Row>
              <S.RowContent>0001</S.RowContent>
              <S.RowContent>Cliente</S.RowContent>
              <S.RowContent>Assunto</S.RowContent>
              <S.RowContent>21/3/2024</S.RowContent>
              <S.RowContent>Finalizado</S.RowContent>
              <S.RowContent>
                <div>
                  <button>
                    <HiOutlineSearch size={20} color="#010001" />
                  </button>
                  <button>
                    <HiOutlinePencilAlt size={20} color="#010001" />
                  </button>
                </div>
              </S.RowContent>
            </S.Row>
          </tbody>
        </S.Table>
      </S.Section>
    </LayoutDashBoard>
  );
};
