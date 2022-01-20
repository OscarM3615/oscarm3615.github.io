import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import highlightjs from 'highlight.js';
import Head from 'next/head';
import config from 'shared/config';
import type { GetStaticProps, GetStaticPaths } from 'next';
import type Post from 'shared/models/post';

marked.setOptions({
	highlight: (code: string, lang: string): string => {
		return highlightjs.highlight(code, {
			language: highlightjs.getLanguage(lang) ? lang : 'plaintext'
		}).value;
	}
});

type ParamType = { slug: string };

type PropType = {
	post: Required<Post>;
};

const BlogPostPage = ({ post }: PropType) => {
	return (
		<>
			<Head>
				<meta name="description" content={post.description} />

				<title>
					{post.title} - Blog | {config.title}
				</title>
			</Head>

			<section>
				<article className="p-4">
					<header className="post-header mb-4">
						<h3>{post.title}</h3>
						<small className="text-muted">Written on {post.createdAt}</small>
					</header>

					<div
						className="post-content"
						dangerouslySetInnerHTML={{ __html: marked(post.content) }}
					></div>

					<footer className="post-footer pt-2">
						<hr />
						Tagged in: {post.tags.join(', ')}
					</footer>
				</article>
			</section>
		</>
	);
};

export const getStaticPaths: GetStaticPaths<ParamType> = async () => {
	const files = fs.readdirSync(path.join(config.postsDir));

	const paths = files.map(filename => {
		return {
			params: { slug: filename.replace(/\.md$/, '') }
		};
	});

	return {
		paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps<PropType> = async context => {
	const { slug } = context.params as ParamType;

	const markdown = fs.readFileSync(
		path.join(config.postsDir, `${slug}.md`),
		'utf-8'
	);

	const {
		data,
		content,
		excerpt: description
	} = matter(markdown, { excerpt: true });

	return {
		props: {
			post: {
				slug,
				title: data.title,
				description: description!,
				createdAt: data.date,
				tags: data.tags,
				content
			}
		}
	};
};

export default BlogPostPage;
