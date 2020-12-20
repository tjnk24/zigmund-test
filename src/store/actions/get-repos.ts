import { REPOS_FETCH_START } from '@store/constants';
import { ReposActionTypes } from '@store/types';

const getRepos = (
  organization: string,
  pageNumber: number,
  pageLimit = 8
): ReposActionTypes => ({
  type: REPOS_FETCH_START,
  payload: {
    organization,
    pageNumber,
    pageLimit
  },
});

export default getRepos;
