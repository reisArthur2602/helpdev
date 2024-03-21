import React from 'react';
import * as S from './styles';
import UserIcon from '../../../../assets/user-icon.png';
export const Avatar = ({ src }) => {
  return (
    <S.Avatar>
      <img src={src ? src : UserIcon} alt="avatar" />
    </S.Avatar>
  );
};
