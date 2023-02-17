import { TransactionHistoryItem } from './TransactionHistoryItem/TransactionHistoryItem';
import {
  TransactionHistoryTable,
  TableHeadItem,
  TableBody,
  TableHead,
  TableRow,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';
export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <TableHead>
        <tr>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </tr>
      </TableHead>

      <TableBody>
        {items.map(({ amount, type, currency, id }) => (
          <TableRow key={id}>
            <TransactionHistoryItem
              amount={amount}
              type={type}
              currency={currency}
            />
          </TableRow>
        ))}
      </TableBody>
    </TransactionHistoryTable>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
