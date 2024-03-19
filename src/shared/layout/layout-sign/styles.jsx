import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--light-grey-100);
`;

export const Main = styled.main`
  max-width: 31.125rem;
  padding: 4.25rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: var(--rounded-200);
  background-color: var(--white);
`;
