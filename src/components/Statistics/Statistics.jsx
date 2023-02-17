// import css from './Statistics.module.css';
import { setBg } from '../../utilities/setBgColor';
import {
  StatisticsStyle,
  Title,
  StatList,
  Item,
  Percentage,
  Label,
} from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsStyle>
      {title && <Title>Upload stats</Title>}
      <StatList>
        {stats.map(stat => (
          <Item key={stat.id} style={{ backgroundColor: setBg() }}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage} %</Percentage>
          </Item>
        ))}
      </StatList>
    </StatisticsStyle>
  );
};
