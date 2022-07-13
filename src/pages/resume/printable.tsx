import Head from 'next/head';
import Heading from 'components/resume/Heading';
import ExperienceSection from 'components/resume/ExperienceSection';
import EducationSection from 'components/resume/EducationSection';
import SoftSkills from 'components/resume/SoftSkills';
import HardSkills from 'components/resume/HardSkills';
import PrintInfo from 'components/resume/PrintInfo';
import { getGithubUser } from 'utils/github';
import config from 'shared/config';
import type { ReactElement } from 'react';
import type { GetStaticProps } from 'next';
import type GithubUser from 'shared/models/github-user';

type PropType = {
	ghUser: GithubUser;
};

const PrintableResumePage = ({ ghUser }: PropType) => {
	return (
		<div className="row gx-0 h-100">
			<aside className="col col-4 bg-primary text-light">
				<div className="container p-4 mt-2">
					<div className="m-4 pb-2">
						<img
							src={ghUser.avatar_url}
							className="img-thumbnail rounded-circle"
							alt={ghUser.name}
						/>
					</div>

					<p className="pb-2">
						Software engineering student with knowledge and experience creating
						full websites, single-page applications (SPA), REST APIs, and
						designing databases.
					</p>

					<SoftSkills />

					<HardSkills />
				</div>
			</aside>
			<main className="col col-8">
				<div className="container p-4 mt-2">
					<Heading
						name="Óscar Miranda"
						position="Web Developer"
						ghUser={ghUser}
					/>

					<ExperienceSection />

					<EducationSection />
				</div>
			</main>
		</div>
	);
};

PrintableResumePage.getLayout = (page: ReactElement) => {
	return (
		<>
			<Head>
				<title>{config.title}</title>
			</Head>
			<div style={{ width: '8.5in', height: '11in', backgroundColor: 'white' }}>
				{page}
				<PrintInfo />
			</div>
		</>
	);
};

export const getStaticProps: GetStaticProps<PropType> = async () => {
	const ghUser = await getGithubUser('OscarM3615');

	return {
		props: { ghUser }
	};
};

export default PrintableResumePage;
