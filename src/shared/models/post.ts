export default interface Post {
	slug: string;
	title: string;
	description: string;
	createdAt: string;
	content?: string;
	tags: string[];
}
