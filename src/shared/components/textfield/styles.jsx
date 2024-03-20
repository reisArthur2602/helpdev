import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  font-size: 0.875rem;
  font-weight: var(--semibold);
`;
export const Input = styled.input`
  padding: 1rem;
  border-radius: var(--rounded-200);
  border: 1px solid var(--light-grey-200);
  &::placeholder {
    color: var(--purple);
  }
`;
