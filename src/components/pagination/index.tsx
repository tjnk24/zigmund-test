import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'react-bootstrap/esm/Pagination';
import getRepos from '@store/actions/get-repos';
import { RepoState } from '@common/types';

import StyledPagination from './style';

const PaginationBlock: FC = () => {
  const {
    current,
    first,
    prev,
    next,
    last
  } = useSelector((state: RepoState) => state.pagination);

  const organization = useSelector((state: RepoState) => state.organization);

  const dispatch = useDispatch();

  const changePage = (page: number) => {
    dispatch(getRepos(organization, page))
  }

  return (
    <StyledPagination>
      { first && (
          <>
            <Pagination.First onClick={() => changePage(first)}/>
            <Pagination.Prev onClick={() => changePage(prev)}/>
          </>
        )
      }
      { prev && (
          <>
            <Pagination.Ellipsis disabled/>
            <Pagination.Item onClick={() => changePage(prev)}>{prev}</Pagination.Item>
          </>
        )
      }
      <Pagination.Item active>{current}</Pagination.Item>
      {
        next && (
          <>
            <Pagination.Item onClick={() => changePage(next)}>{next}</Pagination.Item>
            <Pagination.Ellipsis disabled/>
          </>
        )
      }
      {
        last && (
          <>
            <Pagination.Next onClick={() => changePage(next)} />
            <Pagination.Last onClick={() => changePage(last)} />
          </>
        )
      }
    </StyledPagination>
  );
};

export default PaginationBlock;