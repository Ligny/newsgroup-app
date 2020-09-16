import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className={'outContain'}>
      <h1 className={'pName'}>NewsGroup</h1>
      <div className={'inContain'}>
        <h1 className={'header'}>Join</h1>
        <div>
          <input
            className={'joinInput'}
            placeholder={'Name'}
            type={'text'}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            className={'joinInput space'}
            placeholder={'Room'}
            type={'text'}
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={e => (!name || !room) ? e.preventDefault() : null}
          to={`/chat?name=${name}&room=${room}`}>
          <button
            className={'signButton space'}
            type={"submit"}>Sign In</button>
        </Link>
      </div>
    </div>
  );
}

export default Join;
