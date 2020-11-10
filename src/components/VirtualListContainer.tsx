import React, { ReactElement, memo } from 'react';
import {
  ListChildComponentProps,
  VariableSizeList as List,
  areEqual,
} from 'react-window';
import memoize from 'memoize-one';

import { Person } from '../types';
import PersonDetailsBox from './PersonDetailsBox';

const Row = memo(
  ({ index, style, data }: ListChildComponentProps) => {
    const PersonDetailsBoxProps = {
      person: data.items[index],
      style,
    };

    return <PersonDetailsBox {...PersonDetailsBoxProps} />;
  },

  areEqual
);

const createItemData = memoize((items) => ({
  items,
}));

const VirtualListContainer = ({
  filteredList,
  getItemSize,
}: {
  filteredList: Person[];
  getItemSize: (index: number) => number;
}): ReactElement => {
  const itemData = createItemData(filteredList);

  return (
    <List
      height={600}
      itemCount={filteredList.length}
      itemSize={getItemSize}
      width={'100%'}
      itemData={itemData}
    >
      {Row}
    </List>
  );
};

export default VirtualListContainer;
