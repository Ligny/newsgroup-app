import React from 'react';
import ReactEmoji from 'react-emoji';
import cx from 'classnames';

import './message.css';

const Message = ({
  message: { text, user },
  name
}) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  const colorUser = cx({
    'currentUser': isSentByCurrentUser === true,
    'otherUser': isSentByCurrentUser === false,
  })

  return (
    <div className={`messageContain ${colorUser}`}>
      <div className={'messageBox'}>
        <p className={'messageText'}>{ReactEmoji.emojify(text)}</p>
      </div>
       <p className={'userText'}>{user}</p>
    </div>
  );
}

export default Message;
