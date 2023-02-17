import styled from '@emotion/styled';

export const StatisticsStyle = styled.section`
  margin: 24px auto;
  width: 320px;
  background-color: white;
`;

export const Title = styled.h2`
  padding: 16px;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 8px;
  width: calc(320px / 5);
  color: white;
`;

export const Label = styled.span`
  font-size: 20px;
`;
export const Percentage = styled.span`
  font-weight: 500;
`;
