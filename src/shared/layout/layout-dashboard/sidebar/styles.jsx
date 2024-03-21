import styled from 'styled-components';

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 2.5rem;
  max-width: 19.375rem;
  width: 100%;
  background-color: var(--white);
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2.125rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ButtonLogout = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 1rem;
  font-weight: var(--semibold);
`;
