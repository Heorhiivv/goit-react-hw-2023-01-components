import { TableItem } from './TransactionHistoryItem.styled';
import PropTypes from 'prop-types';
export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <>
      <TableItem>{type}</TableItem>
      <TableItem>{amount}</TableItem>
      <TableItem>{currency}</TableItem>
    </>
  );
};
TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
