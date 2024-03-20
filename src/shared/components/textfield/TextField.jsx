import React from 'react'
import * as S from './styles';

export const TextField = ({label , type , placeholder , name ,  value , onChange}) => {
  return (
    <S.Label>
      {label}
      <S.Input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange}/>
    </S.Label>
  )
}
