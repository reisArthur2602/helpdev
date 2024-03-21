import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 1rem 1.25rem;
  border-radius: var(--rounded-200);
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-weight: var(--bold);
  text-transform: capitalize;
  font-size: 2rem;
  color: #010001;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: #bababa;
`;

export const Username = styled.span`
  color: #010001;
  font-size: 1rem;
`;