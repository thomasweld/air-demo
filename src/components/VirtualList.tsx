import React, { ReactElement } from 'react';
import { useVirtual } from 'react-virtual';

import { Person } from '../types';
import PersonDetailsBox from './PersonDetailsBox';

const VirtualList = ({
  filteredList,
}: {
  filteredList: Person[];
}): ReactElement => {
  const parentRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

  const rowVirtualizer = useVirtual({
    size: filteredList.length,
    parentRef,
    estimateSize: React.useCallback(
      () => (window.innerWidth < 500 ? 300 : 96),
      [window.innerWidth]
    ),
    overscan: 5,
  });

  return (
    <>
      <div
        ref={parentRef}
        className="List"
        style={{
          height: `600px`,
          width: `100%`,
          overflow: 'auto',
        }}
      >
        <div
          style={{
            height: `${rowVirtualizer.totalSize}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {rowVirtualizer.virtualItems.map((virtualRow) => (
            <PersonDetailsBox
              {...filteredList[virtualRow.index]}
              key={virtualRow.index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default VirtualList;
