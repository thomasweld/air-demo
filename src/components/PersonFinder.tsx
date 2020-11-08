import React, { ReactElement, useState } from 'react';

import PersonFinderList from './PersonFinderList';

const PersonFinder = (): ReactElement => {
  const [searchString, setSearchString] = useState('');

  const handleSearchStringChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchString(event.target.value);
  };

  return (
    <div className="peopleFinderWrapper">
      <h1 className="personFinderTitle">The Person Finder</h1>
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

      <PersonFinderList searchString={searchString} />
    </div>
  );
};

export default PersonFinder;
