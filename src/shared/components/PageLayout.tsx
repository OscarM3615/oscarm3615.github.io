import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import NavigationBar from 'shared/components/NavigationBar';
import Stats from 'shared/components/Stats';
import Credits from 'shared/components/Credits';
import type { ReactElement } from 'react';

const PageLayout = ({ children }: { children: ReactElement }) => {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="My personal portfolio/blog created with Next.js"
				/>
			</Head>

			<NavigationBar />

			<Container>
				<div className="row my-4">
					<div className="col col-12 col-lg-8 mb-4 mb-lg-0">
						<div className="card">
							<div className="card-body">{children}</div>
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

export default PageLayout;
