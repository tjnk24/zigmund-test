import Axios from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';
import { REPOS_FETCH_START, REPOS_FETCH_SUCCESS, REPOS_FETCH_ERROR } from '@store/constants';
import { IGetReposAction, RepoResponse } from '@store/types';
import { Repo } from '@common/types';

function* fetchRepos(action: IGetReposAction) {
  const { organization } = action.payload;

  try {
    let page = 1;
    let result: Repo[] = [];
    let fetch = true;

    while(fetch) {
      const response = yield Axios.get(`https://api.github.com/orgs/${organization}/repos?page=${page}`);

      if (response.data.length) {
        const filteredResponse = response.data.map((repo: RepoResponse) => ({
          id: repo.id,
          name: repo.name,
          url: repo.html_url,
          forksCount: repo.forks_count,
          watchersCount: repo.watchers_count,
          stargazersCount: repo.stargazers_count,
        }));

        result = [
          ...result,
          ...filteredResponse
        ]

        page = page + 1;

      } else {
        fetch = false;
      }
    }

    yield put({
      type: REPOS_FETCH_SUCCESS,
      payload: {
        organization,
        repos: result,
      },
    });
  }
  catch {
    yield put({
      type: REPOS_FETCH_ERROR,
    });
  }
}

function* actionWatcher() {
  yield takeLatest(REPOS_FETCH_START, fetchRepos);
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}