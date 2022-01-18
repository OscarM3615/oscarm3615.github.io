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
	return (
		<>
			<Head>
				<title>{config.title}</title>
			</Head>

			<section>
				<div className="row">
					<div className="col-12 col-md-6">
						<div className="px-0 px-md-2 px-lg-4">
							<ProfileCard user={ghUser} />
						</div>
					</div>
					<div className="col-12 col-md-6">
						<AboutMe bio={ghUser.bio} />
					</div>
				</div>
			</section>
		</>
	);
};

export const getStaticProps: GetStaticProps<PropType> = async () => {
	const ghUser = await getGithubUser('OscarM3615');

	return {
		props: {
			ghUser
		}
	};
};

export default HomePage;
