import { RepoState } from '@common/types';
import { REPOS_FETCH_ERROR, REPOS_FETCH_START, REPOS_FETCH_SUCCESS } from '@store/constants';
import { ReposActionTypes } from '@store/types';

const initialState: RepoState = {
  organization: '',
  repos: [],
  pagination: null,
  loading: false,
  success: false,
  errorMessage: '',
};

const reposReducer = (state = initialState, action: ReposActionTypes): RepoState => {
  switch (action.type) {
    case REPOS_FETCH_START: {
      return {
        ...state,
        success: false,
        loading: true,
        errorMessage: '',
      };
    }
    case REPOS_FETCH_SUCCESS: {
      const { organization, repos, pagination } = action.payload;
      return {
        ...state,
        success: true,
        loading: false,
        organization,
        repos,
        pagination,
      };
    }
    case REPOS_FETCH_ERROR: {
      return {
        ...state,
        success: false,
        loading: false,
        errorMessage: 'Sorry, no such company or incorrect company request.',
      };
    }
    default: {
      return state;
    }
  }
};

export default reposReducer;
