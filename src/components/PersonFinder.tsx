import React, { ReactElement, useState, useEffect } from 'react';
import {
  ListChildComponentProps,
  VariableSizeList as List,
} from 'react-window';

import peopleData from '../assets/peopleData.json';
import { Person } from '../types';
import PersonDetailsBox from './PersonDetailsBox';

const PersonFinder = (): ReactElement => {
  const [filteredList, setFilteredList] = useState<Person[]>([]);
  const [searchString, setSearchString] = useState('');

  const Row = ({ index, style, data }: ListChildComponentProps) => (
    <PersonDetailsBox {...data[index]} key={data[index].id} style={style} />
  );

  const getItemSize = () => {
    const w = window.innerWidth;
    return w < 500 ? 300 : 96;
  };

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

      <List
        height={600}
        itemCount={filteredList.length}
        itemSize={getItemSize}
        estimatedItemSize={96}
        width={'100%'}
        itemData={filteredList}
      >
        {Row}
      </List>
    </div>
  );
};

export default PersonFinder;
