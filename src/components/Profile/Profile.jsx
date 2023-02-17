import PropTypes from 'prop-types';
import {
  ProfileStyle,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
} from './Profile.styled';

import { ProfileItem } from './ProfileItem/ProfileItem';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileStyle>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Stats>
        <ProfileItem stats={stats} />
      </Stats>
    </ProfileStyle>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
