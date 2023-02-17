import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  margin: 24px auto;
  width: 640px;
  border-collapse: collapse;
  border: 1px solid black;
`;
export const TableHeadItem = styled.th`
  border: 1px solid black;
`;

export const TableBody = styled.tbody`
  font-size: 16px;
  font-weight: 300;
  border: 1px solid black;
`;

export const TableHead = styled.thead`
  color: white;
  border: 1px solid black;
  text-transform: uppercase;
  background-color: #53e7f8;
`;

export const TableRow = styled.tr`
  &:nth-of-type(odd) {
    background-color: rgb(255, 255, 255);
  }
`;
