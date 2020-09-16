import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';
import './infobar.css';

const InfoBar = ({
  room,
}) => (
  <div className={'infoBar'}>
    <div className={'leftInfo'}>
      <img
        src={onlineIcon}
        alt={'online icon'}
        className={'onlineIcon'}
      />
      <h3>{`# ${room}`}</h3>
    </div>
    <div className={'rightInfo'}>
      <a href="/"><img src={closeIcon} alt="close icon" /></a>
    </div>
  </div>
);

export default InfoBar;
