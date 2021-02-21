import React from 'react';
import PropTypes from 'prop-types';

import styles from './TransactionHistory.module.scss';

const TransactionHistory = ({ items }) => (
<table className={styles.transactionHistory}>
  <thead>
    <tr>
      <th className={styles.type}>>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

<tbody>
    {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
                <td className={styles.type}>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
            ))}
</tbody>            
</table>    
);

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
