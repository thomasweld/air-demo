import React, { useState, useEffect, ReactElement } from 'react';

import peopleData from '../assets/peopleData.json';
import { Person } from '../types';
import VirtualList from './VirtualList';

const PersonFinderList = ({
  searchString,
}: {
  searchString: string;
}): ReactElement => {
  const [filteredList, setFilteredList] = useState<Person[]>([]);

  useEffect(() => {
    setFilteredList(
      peopleData.filter(({ name }) =>
        name.toLocaleLowerCase().includes(searchString.toLowerCase())
      )
    );
  }, [searchString]);

  const virtualListProps = {
    filteredList,
  };
  return <VirtualList {...virtualListProps} />;
};

export default PersonFinderList;
