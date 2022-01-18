import type Post from 'shared/models/post';

export const sortPosts = (a: Post, b: Post): number => {
	return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
};
