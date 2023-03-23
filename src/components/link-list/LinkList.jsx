import React from 'react';


import { PaginatedItems } from '../pagination/PaginatedItems';

export const LinkList = ({ list }) => {
  return (
     
    <ul className='w-auto'>
      <PaginatedItems itemsPerPage={10} list={list} />
    </ul>
  );
};
