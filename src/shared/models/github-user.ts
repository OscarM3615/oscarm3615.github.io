export default interface GithubUser {
	login: string;
	avatar_url: string;
	name: string;
	location: string;
	hireable: boolean;
	blog: string;
	bio?: string;
}
