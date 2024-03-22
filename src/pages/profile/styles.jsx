import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2rem;
  border-radius: var(--rounded-200);
  background-color: white;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 1.25rem;
  div {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: var(--semibold);
`;

export const Avatar = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 16.25rem;
  height: 16.25rem;
  cursor: pointer;
  position: relative;

  input {
    display: none;
  }
  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }

  svg {
    position: absolute;
    z-index: 999;
  }
`;
