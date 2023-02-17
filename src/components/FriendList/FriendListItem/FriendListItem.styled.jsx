import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
  width: 240px;
  border: 1px solid gray;
  background-color: white;
  box-shadow: 10px 5px 5px black;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Img = styled.img`
  width: 48px;
  margin-right: 15px;
  background-color: aliceblue;
  border-radius: 15px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

const bgColor = ({ isOnline }) => {
  return isOnline ? 'green' : 'red';
};
export const Status = styled.span`
  display: inline-block;
  margin-right: 15px;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: ${bgColor};
`;
