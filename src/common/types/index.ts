export type Repo = {
  id: number;
  name: string;
  url: string;
  forksCount: number;
  watchersCount: number;
  stargazersCount: number;
}

type PaginationType = 'current' | 'first' | 'prev' | 'next' | 'last';

export type RepoState = {
  organization: string;
  repos: Repo[];
  pagination: Partial<Record<PaginationType, number>>;
  loading: boolean;
  success: boolean;
  errorMessage: string;
}
