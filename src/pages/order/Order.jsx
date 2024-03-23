import React, { useEffect, useState } from 'react';

import { LayoutDashBoard } from '../../shared/layout';
import { ButtonSubmit, Header, Modal } from '../../shared/components';
import { useNavigate } from 'react-router-dom';
import {
  HiOutlinePlusCircle,
  HiOutlinePencilAlt,
  HiOutlineSearch,
  HiOutlineTrash,
} from 'react-icons/hi';

import * as S from './styles';
import { UserServices } from '../../shared/services';

export const Order = () => {
  const [getOrder, setGetOrder] = useState([]);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    return async () => {
      await UserServices.getOrders(setGetOrder).catch((err)=>console.error("falha ao buscar Chamados"))
    };
  }, []);

  const handleModal = (data) => {
    setOpen(!open);
    setInfo(data);
  };
  const handleDelete = async (id) => {
    await UserServices.deleteOrders(id);
    await UserServices.getOrders(setGetOrder);
  };
 
  return (
    <>
      <Modal isOpen={open} infos={info} onClick={() => setOpen(!open)} />

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
          {getOrder.length > 0 ? (
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
                {getOrder.map((data) => (
                  <S.Row key={data.id}>
                    <S.RowContent>{data.id}</S.RowContent>
                    <S.RowContent>{data.client}</S.RowContent>
                    <S.RowContent>{data.subject}</S.RowContent>
                    <S.RowContent>{data.date}</S.RowContent>
                    <S.RowContent>{data.status}</S.RowContent>
                    <S.RowContent>
                      <div>
                        <button onClick={() => handleModal(data)}>
                          <HiOutlineSearch size={20} color="#010001" />
                        </button>
                        <button
                          onClick={() => navigate(`/order/edit/${data.id}`)}
                        >
                          <HiOutlinePencilAlt size={20} color="#010001" />
                        </button>
                        <button onClick={() => handleDelete(data.id)}>
                          <HiOutlineTrash size={20} color="#010001" />
                        </button>
                      </div>
                    </S.RowContent>
                  </S.Row>
                ))}
              </tbody>
            </S.Table>
          ) : (
            <S.EmptyText>Nenhum chamado foi encontrado</S.EmptyText>
          )}
        </S.Section>
      </LayoutDashBoard>
    </>
  );
};
