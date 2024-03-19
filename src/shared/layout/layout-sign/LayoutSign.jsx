import * as S from './styles';

export const LayoutSign = ({ children }) => {
  return (
    <S.Container>
      <S.Main>{children}</S.Main>
    </S.Container>
  );
};
