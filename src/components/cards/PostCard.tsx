import Link from 'next/link';
import type Post from 'shared/models/post';

type PostCardProps = {
	post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
	return (
		<div className="card">
			<div className="card-body">
				<h4 className="card-title">{post.title}</h4>
				<p className="h6 card-subtitle text-muted mb-2">{post.createdAt}</p>

				<p className="card-text">{post.description}</p>

				<Link href={`/blog/${post.slug}`} passHref>
					<a className="d-block card-link stretched-link text-end">
						Read post <i className="bi bi-arrow-right"></i>
					</a>
				</Link>
			</div>

			<footer className="card-footer d-flex gap-1">
				{post.tags.map(tag => (
					<span key={tag} className="badge bg-secondary">
						{tag}
					</span>
				))}
			</footer>
		</div>
	);
};

export default PostCard;
