import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-weight: var(--semibold);
  font-size: 0.875rem;
  gap: 0.5rem;
`;

export const Select = styled.select`
  width: 100%;
  padding: 1rem;
  border-radius: var(--rounded-100);
  border: 1px solid var(--light-grey-200);
  color: var(--purple);
  font-size: 0.875rem;
  font-weight: var(--regular);

  option {
    width: 100%;
    padding: 1rem;
    border-radius: var(--rounded-100);
    border: 1px solid var(--light-grey-200);
    color: #5250f3;
    font-size: 0.875rem;
    font-weight: var(--regular);
  }
`;
