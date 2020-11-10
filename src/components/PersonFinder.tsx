import React, {
  ReactElement,
  useState,
  useEffect,
  useCallback,
  SetStateAction,
} from 'react';

// import peopleData from '../assets/peopleData.json';
import { Person } from '../types';
import VirtualListContainer from './VirtualListContainer';

const PersonFinder = ({
  handleSearchStringChange,
  filteredList,
  getItemSize,
}: {
  handleSearchStringChange: (event: {
    target: { value: SetStateAction<string> };
  }) => void;
  filteredList: Person[];
  getItemSize: (index: number) => number;
}): ReactElement => {
  const VirtualListProps = {
    filteredList,
    getItemSize,
  };

  return (
    <>
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

      <VirtualListContainer {...VirtualListProps} />
    </>
  );
};

export default PersonFinder;
