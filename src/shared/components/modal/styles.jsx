import styled from 'styled-components';

export const OverLay = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 999;
  background-color: rgba(1, 0, 1, 0.75);
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 36.875rem;
  width: 100%;
  padding: 2rem;
  border-radius: 1rem;
  background-color: var(--dark);
  color: var(--white);
  position: relative;
  
`;
export const Title = styled.h3`
  font-size: 1.5rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Info = styled.span`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  font-size: 1rem;
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

