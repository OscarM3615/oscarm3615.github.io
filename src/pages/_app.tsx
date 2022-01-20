import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import NavigationBar from 'shared/components/NavigationBar';
import Stats from 'shared/components/Stats';
import Credits from 'shared/components/Credits';
import type { AppProps } from 'next/app';

import 'styles/index.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'highlight.js/styles/github.css';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="My personal portfolio/blog created with Next.js"
				/>
			</Head>

			<NavigationBar />

			<Container fluid>
				<div className="row my-4">
					<div className="col col-12 col-lg-8 mb-4 mb-lg-0">
						<div className="card">
							<div className="card-body">
								<Component {...pageProps} />
							</div>
						</div>
					</div>
					<div className="col col-12 col-lg-4">
						<Stats />
						<Credits />
					</div>
				</div>
			</Container>
		</>
	);
};

export default App;
