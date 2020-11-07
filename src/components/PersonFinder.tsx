import React, { ReactElement, useState, useEffect } from 'react';

import peopleData from '../assets/peopleData.json';
import { Person } from '../types';
import PersonDetailsBox from './PersonDetailsBox';

const PersonFinder = (): ReactElement => {
  const [filteredList, setFilteredList] = useState<Person[]>([]);
  const [searchString, setSearchString] = useState('');

  const handleSearchStringChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchString(event.target.value);
  };

  useEffect(() => {
    setFilteredList(
      peopleData.filter(({ name }) =>
        name.toLocaleLowerCase().includes(searchString.toLowerCase())
      )
    );
  }, [searchString]);

  return (
    <div className="PeopleFinderWrapper">
      <h1>The Person Finder</h1>
      <p>
        If you just can’t find someone and need to know what they look like,
        you’ve come to the right place! Just type the name of the person you are
        looking for below into the search box!
      </p>
      <input
        type="text"
        placeholder="Type a name..."
        onChange={handleSearchStringChange}
      />
      {searchString === '' && (
        <ul>
          {peopleData.map((person) => {
            return <PersonDetailsBox {...person} />;
          })}
        </ul>
      )}

      {searchString !== '' && (
        <ul>
          {filteredList.map((person) => {
            return <PersonDetailsBox {...person} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default PersonFinder;

//   {/* {searchString !== '' &&
//     filteredList.map((person) => {
//       return <PersonDetailsBox {...person} />;
//     })}
// </ul> */}
