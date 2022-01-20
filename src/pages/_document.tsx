import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta name="author" content="Óscar Miranda" />
					<meta
						name="keywords"
						content="portfolio, resume, blog, react, nextjs, web, development"
					/>

					{/* Open Graph tags */}
					<meta
						property="og:image"
						content="https://avatars.githubusercontent.com/u/60676993?v=4"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
