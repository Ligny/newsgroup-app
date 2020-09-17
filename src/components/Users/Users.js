import React from 'react';

import User from './User/User';

import './users.css';

const Users = ({
  users,
}) => (
  <div className={'users'}>
    <h1>{`online - ${users.length}`}</h1>
    {users.map((user, i) => <div key={i}><User user={user}/></div>)}
  </div>
);

export default Users;
