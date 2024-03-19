import React from 'react'
import * as S from './styles';

export const TextField = ({label , type , placeholder , name}) => {
  return (
    <S.Label>
      {label}
      <S.Input type={type} placeholder={placeholder} name={name}/>
    </S.Label>
  )
}
