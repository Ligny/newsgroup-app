import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

const InfoBar = ({
  room,
}) => (
  <div>
    <div>
      <img src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div>
      <a href="/"><img src={closeIcon} alt="close icon" /></a>
    </div>
  </div>
);

export default InfoBar;
