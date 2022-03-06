import { useState, useEffect } from 'react';
import Head from 'next/head';
import ProfileCard from 'components/cards/ProfileCard';
import AboutMe from 'components/AboutMe';
import config from 'shared/config';
import { getGithubUser } from 'utils/github';
import type { GetStaticProps } from 'next';
import type GithubUser from 'shared/models/github-user';

type PropType = {
	ghUser: GithubUser;
};

const HomePage = ({ ghUser }: PropType) => {
	const [user, setUser] = useState(ghUser);

	useEffect(() => {
		// Get latest data from GitHub.
		getGithubUser('OscarM3615').then(data => setUser(data));
	}, []);

	return (
		<>
			<Head>
				<title>{config.title}</title>
			</Head>

			<section>
				<div className="row">
					<div className="col-12 col-md-6">
						<div className="px-0 px-md-2 px-lg-4">
							<ProfileCard user={user} />
						</div>
					</div>
					<div className="col-12 col-md-6">
						<AboutMe bio={user.bio} />
					</div>
				</div>
			</section>
		</>
	);
};

export const getStaticProps: GetStaticProps<PropType> = async () => {
	// Initialise data at build to enhance SEO.
	const ghUser = await getGithubUser('OscarM3615');

	return {
		props: {
			ghUser
		}
	};
};

export default HomePage;
