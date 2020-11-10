import React, { ReactElement, useState, useEffect, useCallback } from 'react';

import peopleData from '../assets/peopleData.json';
import { Person } from '../types';
import PersonFinder from './PersonFinder';

const PersonFinderContainer = (): ReactElement => {
  const [filteredList, setFilteredList] = useState<Person[]>(peopleData);
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
  }, [peopleData, searchString]);

  const getItemSize = useCallback(() => (window.innerWidth < 500 ? 316 : 144), [
    window.innerWidth,
  ]);

  const PersonFinderProps = {
    handleSearchStringChange,
    filteredList,
    getItemSize,
  };

  return (
    <div className="peopleFinderWrapper">
      <PersonFinder {...PersonFinderProps} />
    </div>
  );
};

export default PersonFinderContainer;
