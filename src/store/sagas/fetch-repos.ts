import Axios from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';
import { REPOS_FETCH_START, REPOS_FETCH_SUCCESS, REPOS_FETCH_ERROR } from '@store/constants';
import { IGetReposAction, RepoResponse } from '@store/types';

function* fetchRepos(action: IGetReposAction) {
  const { organization } = action.payload;

  try {
    const response = yield Axios.get(`https://api.github.com/orgs/${organization}/repos`);

    const result = response.data.map((repo: RepoResponse) => ({
      id: repo.id,
      name: repo.name,
      url: repo.html_url,
      forksCount: repo.forks_count,
      watchersCount: repo.watchers_count,
      stargazersCount: repo.stargazers_count,
    }));

    yield put({
      type: REPOS_FETCH_SUCCESS,
      payload: {
        organization,
        repos: result
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