import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.main`
  max-width: 31.125rem;
  width: 100%;
  padding: 4.25rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: var(--rounded-200);
  background-color: var(--white);
`;
