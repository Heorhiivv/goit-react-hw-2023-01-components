import styled from '@emotion/styled';

export const StatsList = styled.li`
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(260px / 3);
  padding: 12px;
  border-top: 2px solid gray;
  &:not(:last-child) {
    border-right: 2px solid gray;
  }
`;

export const Quantity = styled.span`
  font-weight: 500;
`;
export const Label = styled.span`
  color: gray;
`;
