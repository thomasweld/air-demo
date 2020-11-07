import React, { ReactElement } from 'react';

import { Person } from '../types';

const PersonDetailsBox = ({
  id,
  name,
  //   email,
  avatar,
  description,
}: Person): ReactElement => {
  return (
    <li className="PersonDetailsBox">
      <img
        // src={avatar} // image URLs returning 522 // not working
        src={'https://via.placeholder.com/96'}
        className="personAvatar"
        alt={`Avatar of ${name}`}
      />
      <div className="personNameAndDetails">
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default PersonDetailsBox;
