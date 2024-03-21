import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Link = styled(NavLink)`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  border-radius: var(--rounded-200);
  padding: 1rem;
  transition: 0.1s linear all;
  font-size: 1rem;
  font-weight: var(--semibold);
  color: var(--dark);

  &:hover {
    background-color: var(--purple);
    color: var(--light-grey-100);
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: var(--purple);
      color: var(--light-grey-100);
    `}
`;
