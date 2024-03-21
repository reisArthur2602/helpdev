import React, { useContext } from 'react';
import { AuthContext } from '../../context/Auth';
import * as S from './styles';
import { Avatar } from './avatar/Avatar';

export const Header = ({ title }) => {
  const { user } = useContext(AuthContext);

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {/* profile */}
      <S.Profile>
        <Avatar src={user.avatarUrl} />
        <S.Wrapper>
          <S.Username>{user.username}</S.Username>
          <span>Admin</span>
        </S.Wrapper>
      </S.Profile>
    </S.Container>
  );
};
