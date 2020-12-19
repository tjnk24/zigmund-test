import React, { FC } from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';
import CardItem from '@components/card';
import PaginationBlock from '@components/pagination';

import { CardsWrapper, InfoWrapper, Placeholder } from './style';

const CardsBlock: FC = () => {
  return (
    <CardsWrapper>
      <Placeholder>
        <div>Type in organization's name in the field above</div>
        {/* <Spinner animation="border"/> */}
      </Placeholder>
      {/* <InfoWrapper>
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
      <PaginationBlock /> */}
    </CardsWrapper>
  );
};

export default CardsBlock;