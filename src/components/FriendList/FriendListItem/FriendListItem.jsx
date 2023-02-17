import { Item, Img, Name, Status } from './FriendListItem.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status isOnline={isOnline} />
      <Img src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </Item>
  );
};
