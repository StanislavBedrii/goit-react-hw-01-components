import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({avatar, name, isOnline, id}) => {
    return (
        <li key={id} class="item">
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt="avatar" width="48" />
            <p class="name">{name}</p>
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