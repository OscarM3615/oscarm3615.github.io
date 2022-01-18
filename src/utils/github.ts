import type GithubUser from 'shared/models/github-user';

const GITHUB_API = 'https://api.github.com';

export const getGithubUser = async (username: string): Promise<GithubUser> => {
	const response = await fetch(`${GITHUB_API}/users/${username}`);
	return await response.json();
};
