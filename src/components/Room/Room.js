import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import Chat from './../Chat/Chat';
import Users from './../Users/Users';

import './room.css';

let socket;

const Room = ({
  location,
}) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const PORT = 'https://newsgroup.herokuapp.com/';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(PORT);
    setRoom(room);
    setName(name);

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [PORT, location.search]);

  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  return (
    <div className={'outContainRoom'}>
      <Chat
        messages={messages}
        socket={socket}
        room={room}
        name={name}
      />
      <Users users={users} />
    </div>
  );
}

export default Room;
