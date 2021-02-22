import React from 'react';
import PropTypes from 'prop-types';

import styles from './TransactionHistory.module.scss';

const TransactionHistory = ({ items }) => (
<table className={styles.transactionHistory}>
  <thead>
    <tr>
      <th className={styles.type}>Type</th>
      <th className={styles.type}>Amount</th>
      <th className={styles.type}>Currency</th>
    </tr>
  </thead>

<tbody>
    {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
                <td className={styles.type}>{type}</td>
                <td className={styles.type}>{amount}</td>
                <td className={styles.type}>{currency}</td>
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
