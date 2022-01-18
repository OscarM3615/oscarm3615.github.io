import { useState } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import PostCard from 'components/cards/PostCard';
import config from 'shared/config';
import { sortPosts } from 'utils/date';
import { capitalise } from 'utils/string';
import type { GetStaticProps } from 'next';
import type Post from 'shared/models/post';

type PropType = {
	posts: Post[];
	tags: string[];
};

const BlogPage = ({ posts, tags }: PropType) => {
	const [tagFilter, setTagFilter] = useState('');

	const postsFilter = (post: Post) => {
		return !tagFilter || post.tags.includes(tagFilter);
	};

	return (
		<>
			<Head>
				<title>Blog | {config.title}</title>
			</Head>

			<section>
				<h3 className="text-center mb-4">Blog</h3>

				<div className="col-12 col-md-4 mb-4 ms-0 ms-sm-4">
					<label htmlFor="filter" className="form-label small">
						Filter by tag
					</label>
					<select
						id="filter"
						className="form-control form-control-sm"
						value={tagFilter}
						onChange={e => setTagFilter(e.target.value)}
					>
						<option value="">Show all</option>
						{tags.map((tag, index) => (
							<option key={index} value={tag}>
								{capitalise(tag)}
							</option>
						))}
					</select>
				</div>

				<div className="d-flex flex-column gap-3 px-0 px-md-4">
					{posts.filter(postsFilter).map(post => (
						<PostCard key={post.slug} post={post} />
					))}
				</div>
			</section>
		</>
	);
};

export const getStaticProps: GetStaticProps<PropType> = async () => {
	const files = fs.readdirSync(path.join(config.postsDir));

	const posts: Post[] = files.map(filename => {
		const slug = filename.replace(/\.md$/, '');

		const markdown = fs.readFileSync(
			path.join(config.postsDir, filename),
			'utf-8'
		);

		const { data, excerpt: description } = matter(markdown, {
			excerpt: true
		});

		return {
			slug,
			title: data.title,
			description: description!,
			createdAt: data.date,
			tags: data.tags
		};
	});

	const tags = new Set(posts.map(post => post.tags).flat());

	return {
		props: {
			posts: posts.sort(sortPosts),
			tags: Array.from(tags)
		}
	};
};

export default BlogPage;
