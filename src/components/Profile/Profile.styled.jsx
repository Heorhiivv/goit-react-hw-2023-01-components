import styled from '@emotion/styled';

export const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 260px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 10px 5px 5px black;
  background-color: #ffffff;
`;

export const Description = styled.div`
  padding-bottom: 24px;
`;

export const Avatar = styled.img`
  width: 100px;
  margin: 24px auto;
  background-color: #000;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 12px;
`;
export const Tag = styled.p`
  color: gray;
  margin-bottom: 12px;
`;
export const Location = styled.p`
  color: gray;
`;

export const Stats = styled.ul`
  display: flex;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #f2eeee;
`;
