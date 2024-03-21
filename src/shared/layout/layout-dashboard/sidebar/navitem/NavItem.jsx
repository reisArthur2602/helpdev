import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { useLocation } from 'react-router-dom';

export const NavItem = ({ path, children }) => {
  const [pathname, setPathname] = useState(null);
  const location = useLocation();
  

  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);


  return (
    <S.Link to={path} isSelected={path === pathname ? true : false}>
      {children}
    </S.Link>
  );
};
