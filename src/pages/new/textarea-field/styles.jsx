import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  width: 100%;
  font-weight: var(--semibold);
  font-size: 0.875rem;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border-radius: var(--rounded-100);
  border: 1px solid var(--light-grey-200);
  color: var(--purple);
  font-size: 0.875rem;
  font-weight: var(--regular);
  height: 10rem;
  resize: none;

  &::placeholder {
    color: var(--purple);
  }
`;
