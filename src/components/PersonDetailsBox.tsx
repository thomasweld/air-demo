import React, { ReactElement } from 'react';

import { Person } from '../types';

const PersonDetailsBox = ({
  person,
  style,
}: {
  person: Person;
  style: any;
}): ReactElement => {
  return (
    <li className="personDetailsBox" style={style} key={person.id}>
      <img
        src={'https://via.placeholder.com/96'}
        className="personAvatar"
        alt={`Avatar of ${name}`}
      />
      <div className="personNameAndDetails">
        <h4 className="personBoxName">{person.name}</h4>
        <p className="personBoxDescription">{person.description}</p>
      </div>
    </li>
  );
};

export default PersonDetailsBox;
