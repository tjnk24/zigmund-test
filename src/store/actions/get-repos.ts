import { REPOS_FETCH_START } from '@store/constants';
import { ReposActionTypes } from '@store/types';

const getRepos = (organization: string): ReposActionTypes => ({
  type: REPOS_FETCH_START,
  payload: { organization },
});

export default getRepos;
