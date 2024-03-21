import styled from "styled-components";

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
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: var(--semibold);
`;