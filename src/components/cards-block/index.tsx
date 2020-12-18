import React, { FC } from 'react';
import CardItem from '@components/card';
import PaginationBlock from '@components/pagination';

import { CardsWrapper, InfoWrapper } from './style';

const CardsBlock: FC = () => {
  return (
    <CardsWrapper>
      <InfoWrapper>
        <h3>Organization's name</h3>
        <span>Repos amount: 30</span>
      </InfoWrapper>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <PaginationBlock />
    </CardsWrapper>
  );
};

export default CardsBlock;