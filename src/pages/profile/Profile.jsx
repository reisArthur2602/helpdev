import React, { useContext, useState } from 'react';
import { LayoutDashBoard } from '../../shared/layout';
import { ButtonSubmit, Header, TextField } from '../../shared/components';
import { AuthContext } from '../../shared/context/Auth';
import { HiCloudUpload } from 'react-icons/hi';
import UserIcon from '../../assets/user-icon.png';
import * as S from './styles';

export const Profile = () => {
  const { user } = useContext(AuthContext);
  const [email, setEmail] = useState(user && user.email);
  const [avatarImage, setAvatarImage] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(user & user.avatarUrl);
  const [username, setUsername] = useState('');

  return (
    <LayoutDashBoard>
      <Header title="perfil" />
      <S.Form>
        <S.Title>Atualizar Perfil</S.Title>
        {/* avatar */}
        <S.Avatar>
          <input type="file" accept="image/*" />
          <HiCloudUpload size={60} color="#bbbbb" />
          <img
            src={avatarImage ? avatarImage : UserIcon}
            alt="imagem de perfil"
          />
        </S.Avatar>

        <S.Box>
          <div>
            <TextField
              label="Usuário"
              placeholder="Insira um nome de usuário"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Email"
              placeholder="email@email.com"
              type="text"
              name="email"
              value={email}
              disabled="true"
            />
          </div>
          <ButtonSubmit type="submit">Salvar</ButtonSubmit>
        </S.Box>
      </S.Form>
    </LayoutDashBoard>
  );
};
