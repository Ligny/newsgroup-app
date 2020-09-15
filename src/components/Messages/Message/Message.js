import React from 'react';

import ReactEmoji from 'react-emoji';

const Message = ({
  message: { text, user },
  name
}) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    <div>
      <div>
        <p>{ReactEmoji.emojify(text)}</p>
      </div>
       <p>{user}</p>
    </div>
  );
}

export default Message;
