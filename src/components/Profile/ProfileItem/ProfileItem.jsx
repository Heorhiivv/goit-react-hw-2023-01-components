import PropTypes from 'prop-types';
import { StatsList, Quantity, Label } from './ProfileItem.styled';
export const ProfileItem = ({ stats }) => {
  const { followers, likes, views } = stats;
  return (
    <>
      <StatsList>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </StatsList>
      <StatsList>
        <Label>Views</Label>
        <Quantity>{likes}</Quantity>
      </StatsList>
      <StatsList>
        <Label>Likes</Label>
        <Quantity>{views}</Quantity>
      </StatsList>
    </>
  );
};

ProfileItem.propTypes = {
  stats: PropTypes.object.isRequired,
};
