import { Repo } from '@common/types';
import { REPOS_FETCH_ERROR, REPOS_FETCH_START, REPOS_FETCH_SUCCESS } from './constants';

export interface IGetReposAction {
  type: typeof REPOS_FETCH_START;
  payload: {
    organization: string;
  }
}

export interface IGetReposSuccessAction {
  type: typeof REPOS_FETCH_SUCCESS;
  payload: {
    organization: string;
    repos: Repo[];
  }
}

export interface IGetRposErrorAction {
  type: typeof REPOS_FETCH_ERROR;
}

export type RepoResponse = {
  id: number;
  name: string;
  html_url: string;
  forks_count: number
  watchers_count: number;
  stargazers_count: number;
}

export type ReposActionTypes = IGetReposAction | IGetReposSuccessAction | IGetRposErrorAction;