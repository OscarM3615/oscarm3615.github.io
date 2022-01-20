import Head from 'next/head';
import Link from 'next/link';
import config from 'shared/config';

const NotFoundPage = () => {
	return (
		<>
			<Head>
				<title>Page not found | {config.title}</title>
			</Head>

			<section>
				<h3 className="text-center mb-4">Page not found</h3>

				<p className="text-center fs-1">
					<i className="bi bi-exclamation-triangle-fill text-danger"></i>
				</p>

				<p className="text-center">
					The page you are looking for does not exist or may have been moved or
					deleted.
				</p>

				<p className="text-center">
					You can return to the home page or read some posts.
				</p>

				<div className="d-flex justify-content-center gap-2 mt-4">
					<Link href="/" passHref>
						<a className="btn btn-primary">Home page</a>
					</Link>
					<Link href="/blog" passHref>
						<a className="btn btn-light">Read blog</a>
					</Link>
				</div>
			</section>
		</>
	);
};

export default NotFoundPage;
