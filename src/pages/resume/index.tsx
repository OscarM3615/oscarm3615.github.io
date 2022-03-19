import Head from 'next/head';
import Link from 'next/link';
import education from 'data/education';
import experience from 'data/experience';
import skills from 'data/skills';
import config from 'shared/config';
import type { GetStaticProps } from 'next';
import type Education from 'shared/models/education';
import type Experience from 'shared/models/experience';
import type Skill from 'shared/models/skill';

type PropType = {
	education: Education[];
	experience: Experience[];
	skills: Skill[];
};

const ResumePage = ({ education, experience, skills }: PropType) => {
	return (
		<>
			<Head>
				<title>Resume | {config.title}</title>
			</Head>

			<section className="position-relative">
				<Link href="/resume/printable" passHref>
					<a className="btn btn-primary position-absolute top-0 end-0">
						<i
							className="bi bi-printer-fill d-sm-none d-inline-block"
							title="Printable version"
							aria-label="Printable version"
						></i>
						<span className="d-sm-inline-block d-none">Printable version</span>
					</a>
				</Link>

				<h3 className="text-center mb-4">Resume</h3>

				<h4>
					<i className="bi bi-book text-primary"></i> Education
				</h4>

				<div className="ms-4 my-4">
					{education.map(item => (
						<div key={item.institution} className="mb-2">
							<p className="text-primary fs-5 mb-0">{item.institution}</p>
							<small className="text-muted mb-0">
								{item.startDate} — {item.endDate}
							</small>

							{item.description && <p>{item.description}</p>}
						</div>
					))}
				</div>

				<h4>
					<i className="bi bi-briefcase text-primary"></i> Experience
				</h4>

				<div className="ms-4 my-4">
					{experience.map(item => (
						<div key={item.institution} className="mb-2">
							<p className="text-primary fs-5 mb-0">
								{item.position}{' '}
								<em className="text-muted">- {item.institution}</em>
							</p>
							<small className="text-muted mb-0">
								{item.startDate} — {item.endDate}
							</small>

							{item.description && <p>{item.description}</p>}
						</div>
					))}
				</div>

				<h4>
					<i className="bi bi-check-square text-primary"></i> My Skills
				</h4>

				<div className="ms-4 mt-4">
					{skills.map(item => (
						<div key={item.label} className="mb-2">
							{item.label}
							<div className="progress">
								<div
									className="progress-bar progress-bar-striped bg-info"
									style={{ width: `${item.level}%` }}
									role="progressbar"
									aria-valuemin={0}
									aria-valuemax={100}
									aria-valuenow={item.level}
								>
									{item.level} %
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export const getStaticProps: GetStaticProps<PropType> = async () => {
	return {
		props: {
			education,
			experience,
			skills
		}
	};
};

export default ResumePage;
