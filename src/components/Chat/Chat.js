import React, { useState } from 'react';

import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './chat.css';

const Chat = ({
  messages,
  socket,
  room,
  name,
}) => {
  const [message, setMessage] = useState('');

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
      <div className={'middleContainRoom'}>
        <InfoBar room={room} />
        <Messages
          messages={messages}
          name={name}
        />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
  );
}

export default Chat;
