import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/esm/Spinner';
import CardItem from '@components/card';
import PaginationBlock from '@components/pagination';

import { CardsWrapper, InfoWrapper, Placeholder } from './style';
import { Repo, RepoState } from '@common/types';

const CardsBlock: FC = () => {
  const state = useSelector((state: RepoState) => state);

  const {
    loading,
    success,
    errorMessage,
    repos,
    organization,
  } = state;

  const getPlaceholder = () => {
    if (loading) {
      return <Spinner animation="border"/>
    }
    if (errorMessage) {
      return <div>{errorMessage}</div>
    }
    return <div>Type in organization's name in the field above, for example: facebook or airbnb</div>
  }

  const getOrganizationName = () => {
    const firstLetter = organization.charAt(0);

    return organization.replace(firstLetter, firstLetter.toUpperCase());
  }

  const mapCards = (reposArray: Repo[]) => reposArray.map(
    (repo) => (
      <CardItem
        key={repo.id}
        {...repo}
      />
    ))

  return (
    <CardsWrapper>
      {
        !success
        ? (
          <Placeholder>
            { getPlaceholder() }
          </Placeholder>
        ) : (
          <>
            <InfoWrapper>
              <h3>{ getOrganizationName() }</h3>
              <span>Repos count: {repos.length}</span>
            </InfoWrapper>
            { mapCards(repos) }
            <PaginationBlock />
          </>
        )
      }
    </CardsWrapper>
  );
};

export default CardsBlock;