import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/esm/Spinner';
import CardItem from '@components/card';
import PaginationBlock from '@components/pagination';
import { Repo, RepoState } from '@common/types';

import { CardsWrapper, InfoWrapper, Placeholder } from './style';

const CardsBlock: FC = () => {
  const state = useSelector((state: RepoState) => state);

  const {
    loading,
    success,
    errorMessage,
    organization,
    repos,
  } = state;

  const getPlaceholder = (isLoading: boolean, error: string, reposArr: Repo[]) => {
    if (isLoading && !reposArr.length) {
      return <Spinner animation="border"/>
    }
    if (error) {
      return <div>{error}</div>
    }
    if (!reposArr.length) {
      return (
        <div>
          Type in organization's name in the field above,
          for example: facebook or airbnb
        </div>
        )
    }
  }

  const getOrganizationName = (name: string) => {
    const firstLetter = name.charAt(0);

    return name.replace(firstLetter, firstLetter.toUpperCase());
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
        success || repos.length
        ? (
          <>
            <InfoWrapper>
              <h3>{ getOrganizationName(organization) }</h3>
            </InfoWrapper>
            { mapCards(repos) }
            <PaginationBlock />
          </>
        ) : (
          <Placeholder>
            { getPlaceholder(loading, errorMessage, repos) }
          </Placeholder>
        )
      }
    </CardsWrapper>
  );
}

export default CardsBlock;
