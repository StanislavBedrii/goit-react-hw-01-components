import React from 'react';
import PropTypes from 'prop-types';
import styles from '../FriendList/FriendList.module.scss';

const FriendListItem = ({avatar, name, isOnline, id}) => {
    const statusClass = isOnline ? styles.online : styles.offline;
    return (

        <li key={id} className={styles.item}>
            <span className={statusClass}>{isOnline}</span>
            <img className={styles.avatar} src={avatar} alt="avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.string.isRequired,
  }),
};

 
export default FriendListItem;