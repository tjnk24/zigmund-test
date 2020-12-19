export type Repo = {
  name: string;
  url: string;
  forksCount: number;
  watchersCount: number;
  stargazersCount: number;
}

export type RepoState = {
  organization: string;
  repos: Repo[];
  loading: boolean;
  errorMessage: string;
}
