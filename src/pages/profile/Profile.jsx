import React, { useContext, useState } from 'react';
import { LayoutDashBoard } from '../../shared/layout';
import { ButtonSubmit, Header, TextField } from '../../shared/components';
import { AuthContext } from '../../shared/context/Auth';
import { HiCloudUpload } from 'react-icons/hi';
import UserIcon from '../../assets/user-icon.png';
import * as S from './styles';
import { doc, updateDoc } from 'firebase/firestore';
import { db, storage } from '../../shared/services';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

export const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [email, setEmail] = useState(user && user.email);
  const [avatarImage, setAvatarImage] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
  const [username, setUsername] = useState(user && user.username);

  const handleFile = (e) => {
    const image = e.target.files[0];
    if (image.type === 'image/png' || image.type === 'image/jpeg') {
      setAvatarImage(image);
      setAvatarUrl(URL.createObjectURL(image));
    } else {
      console.log('Envie arquivos no formato PNG ou JPEG');
      setAvatarUrl(null);
      return;
    }
  };

  const handleUpload = async () => {
    const uploadRef = ref(storage, `images/${user.uid}/${avatarImage.name}`);

    uploadBytes(uploadRef, avatarImage).then((res) => {
      getDownloadURL(res.ref).then(async (url) => {
        const docRef = doc(db, 'users', user.uid);
        await updateDoc(docRef, {
          ...user,
          username: username,
          avatarUrl: url,
        }).then(() => {
          const data = { ...user, username: username, avatarUrl: url };
          setUser(data);
          localStorage.setItem('@user', JSON.stringify(data));
        });
      });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (avatarImage === null && username !== '') {
      const docRef = doc(db, 'users', user.uid);
      await updateDoc(docRef, { ...user, username: username }).then(() => {
        const data = { ...user, username: username };
        setUser(data);
        localStorage.setItem('@user', JSON.stringify(data));
      });
    } else if (avatarImage !== null ) {
      handleUpload();
    }
  };

  return (
    <LayoutDashBoard>
      <Header title="perfil" />
      <S.Form onSubmit={handleSubmit}>
        <S.Title>Atualizar Perfil</S.Title>
        {/* avatar */}
        <S.Avatar>
          <input type="file" accept="image/*" onChange={handleFile} />
          <HiCloudUpload size={60} color="#bababa" />
          <img src={avatarUrl ? avatarUrl : UserIcon} alt="imagem de perfil" />
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
              disabled={true}
            />
          </div>
          <ButtonSubmit type="submit">Salvar</ButtonSubmit>
        </S.Box>
      </S.Form>
    </LayoutDashBoard>
  );
};
