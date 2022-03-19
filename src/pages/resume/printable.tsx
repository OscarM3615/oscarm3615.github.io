import Head from 'next/head';
import education from 'data/education';
import experience from 'data/experience';
import skills from 'data/skills';
import softSkills from 'data/soft-skills';
import { getGithubUser } from 'utils/github';
import config from 'shared/config';
import type { ReactElement } from 'react';
import type { GetStaticProps } from 'next';
import type Education from 'shared/models/education';
import type Experience from 'shared/models/experience';
import type Skill from 'shared/models/skill';
import type GithubUser from 'shared/models/github-user';

type PropType = {
	ghUser: GithubUser;
	education: Education[];
	experience: Experience[];
	skills: Skill[];
};

const PrintableResumePage = ({
	ghUser,
	education,
	experience,
	skills
}: PropType) => {
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

					<section className="pb-4">
						<h4>
							<i className="bi bi-diamond-fill"></i> Soft Skills
						</h4>

						{softSkills.map(item => (
							<span key={item} className="badge bg-secondary fs-6 m-1">
								{item}
							</span>
						))}
					</section>

					<section className="pb-4">
						<h4>
							<i className="bi bi-diamond-fill"></i> Hard Skills
						</h4>

						{skills.map(item => (
							<span key={item.label} className="badge bg-secondary fs-6 m-1">
								{item.label}
							</span>
						))}
					</section>
				</div>
			</aside>
			<main className="col col-8">
				<div className="container p-4 mt-2">
					<section className="pb-4">
						<p className="fs-1 text-primary mb-0">{ghUser.name}</p>
						<p className="fs-5 text-danger">Web Developer</p>

						<div className="row">
							<div className="col">
								<p className="small">
									<i className="bi bi-envelope-fill text-danger"></i>{' '}
									{config.email}
								</p>
								<p className="small">
									<i className="bi bi-geo-alt-fill text-danger"></i>{' '}
									{ghUser.location}
								</p>
								<p className="small">
									<i className="bi bi-globe text-danger"></i> {ghUser.blog}
								</p>
							</div>
							<div className="col">
								<p className="small">
									<i className="bi bi-phone-fill text-danger"></i>{' '}
									{config.phone}
								</p>
								<p className="small">
									<i className="bi bi-linkedin text-danger"></i>{' '}
									{config.linkedin}
								</p>
							</div>
						</div>
					</section>

					<section className="pb-4">
						<h4 className="text-primary">
							<i className="bi bi-diamond-fill"></i> Work Experience
						</h4>

						{experience.map(item => (
							<div key={item.institution} className="mb-2">
								<p className="fs-5 mb-0">
									{item.position}{' '}
									<em className="text-muted">- {item.institution}</em>
								</p>
								<small className="text-danger fst-italic">
									{item.startDate} — {item.endDate}
								</small>
								<p>{item.description}</p>
							</div>
						))}
					</section>

					<section>
						<h4 className="text-primary">
							<i className="bi bi-diamond-fill"></i> Education
						</h4>

						{education.map(item => (
							<div key={item.institution} className="mb-2">
								<p className="fs-5 mb-0">{item.institution}</p>
								<small className="text-danger fst-italic">
									{item.startDate} — {item.endDate}
								</small>
								<p>{item.description}</p>
							</div>
						))}
					</section>
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
			<div style={{ width: '8.5in', height: '11in' }}>{page}</div>
		</>
	);
};

export const getStaticProps: GetStaticProps<PropType> = async () => {
	const ghUser = await getGithubUser('OscarM3615');

	return {
		props: {
			ghUser,
			education,
			experience,
			skills
		}
	};
};

export default PrintableResumePage;
