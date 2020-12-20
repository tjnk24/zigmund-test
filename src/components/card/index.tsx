import React, { FC } from 'react';
import Card from 'react-bootstrap/esm/Card';
import { Repo } from '@common/types';

import { StyledCard, CardTextWrap } from './style';

const CardItem: FC<Repo> = ({
  name, url, forksCount, watchersCount, stargazersCount,
}) => (
  <StyledCard>
    <Card.Title>
      <a href={url}>{name}</a>
    </Card.Title>
    <CardTextWrap>
      <Card.Text>
        Forks:
        <b>{forksCount}</b>
      </Card.Text>
      <Card.Text>
        Watchers:
        <b>{watchersCount}</b>
      </Card.Text>
      <Card.Text>
        Stargazers:
        <b>{stargazersCount}</b>
      </Card.Text>
    </CardTextWrap>
  </StyledCard>
);

export default CardItem;
