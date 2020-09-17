import React from 'react';

import './../User/user.css';

import onlineIcon from '../../../icons/onlineIcon.png';

const User = ({
  user,
}) => (
  <div className='userContain'>
    <img
      src={onlineIcon}
      alt={'online icon'}
      className={'onlineIcon'}></img>
    <div>
      <p>{user.name}</p>
    </div>
  </div>
)

export default User;
