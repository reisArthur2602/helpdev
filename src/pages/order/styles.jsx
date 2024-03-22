import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  font-size: 0.875rem;
`;
export const THead = styled.thead`
  background-color: var(--dark);
  color: var(--white);
  font-weight: var(--regular);
`;
export const HeaderContent = styled.th`
  max-width: 11.125rem;
  width: 100%;
  padding: 0.8rem 1.5rem;
  text-align: left;
  text-transform: uppercase;
`;

export const Row = styled.tr`
  width: 100%;
  background-color: var(--white);
`;
export const RowContent = styled.td`
  word-wrap: break-word;
  width: 100%;
  padding: 1.6rem 1.5rem;
  text-align: left;
  font-size: 0.875rem;
  border-bottom: 1px solid #f2efef;

  div {
    display: flex;
    align-items: center;
    gap: 0.625rem;
  }
`;

export const EmptyText = styled.span`
  width: 100%;
  text-align: center;
  margin-top: 5rem;
  font-size: 1.25rem;
  font-weight: var(--semibold);
  color: var(--light-grey-200);
`;
