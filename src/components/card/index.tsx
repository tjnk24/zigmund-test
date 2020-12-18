import React, { FC } from 'react';
import Card from 'react-bootstrap/esm/Card';

import { StyledCard, CardTextWrap } from './style';

const CardItem: FC = () => {
  return (
    <StyledCard>
      <Card.Title>
        <a href="#">Repository name and link</a>
      </Card.Title>
      <CardTextWrap>
        <Card.Text>Forks: <b>3000</b></Card.Text>
        <Card.Text>Watchers: <b>12000</b></Card.Text>
        <Card.Text>Stargazers: <b>10000</b></Card.Text>
      </CardTextWrap>
    </StyledCard>
  );
};

export default CardItem;