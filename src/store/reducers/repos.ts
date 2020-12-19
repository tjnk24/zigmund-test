import { RepoState } from '@common/types';
import { REPOS_FETCH_ERROR, REPOS_FETCH_START, REPOS_FETCH_SUCCESS } from '@store/constants';
import { ReposActionTypes } from '@store/types';

const initialState: RepoState = {
  organization: '',
  repos: [],
  loading: false,
  errorMessage: '',
};

const reposReducer = (state = initialState, action: ReposActionTypes) => {
  switch (action.type) {
    case REPOS_FETCH_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case REPOS_FETCH_SUCCESS: {
      const { organization, repos } = action.payload;
      return {
        ...state,
        organization,
        repos,
        loading: false,
      }
    }
    case REPOS_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        errorMessage: 'Sorry, no such company or incorrect company request.'
      }
    }
    default: {
      return state;
    }
  }
}

export default reposReducer;
