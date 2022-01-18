export default interface GithubUser {
	login: string;
	avatar_url: string;
	name: string;
	location: string;
	hireable: boolean;
	bio?: string;
}
