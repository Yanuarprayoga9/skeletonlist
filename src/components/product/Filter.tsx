import React, { useState } from 'react';
import Container from '../Container';

interface FilterProps {
  limit: number;
  order: string;
  setLimit: (p: number) => void;
  setOrder: (p: string) => void;
}

export const Filter = (props: FilterProps) => {
  const { limit, order, setLimit, setOrder } = props;
  const handleLimit = (e:React.ChangeEvent<HTMLInputElement>) => {
    setLimit(Number(e.target.value));
  };
  const handleOrder = (e:React.ChangeEvent<HTMLInputElement>) => {
    setOrder(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Container className="flex justify-between">
      <select onChange={handleLimit} value={limit}>
        {[20, 50].map((item, index) => (
          <option key={index} value={item}>
            {item} items
          </option>
        ))}
      </select>
      <select onChange={handleOrder} value={order}>
        {["asc", "desc"].map((item, index) => (
          <option key={index} value={item}>
            sort: {item} 
          </option>
        ))}
      </select>
    </Container>
  );
};
