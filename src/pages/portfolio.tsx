import Head from 'next/head';
import ProjectCard from 'components/cards/ProjectCard';
import projects from 'data/projects';
import config from 'shared/config';
import type { GetStaticProps } from 'next';
import type Project from 'shared/models/project';

type PropType = {
	projects: Project[];
};

const PortfolioPage = ({ projects }: PropType) => {
	return (
		<>
			<Head>
				<title>Portfolio | {config.title}</title>
			</Head>

			<section>
				<h3 className="text-center mb-4">Portfolio</h3>

				{projects.length > 0 ? (
					<div className="row row-cols-1 row-cols-md-2 gy-4">
						{projects.map(project => (
							<div key={project.title}>
								<ProjectCard project={project} />
							</div>
						))}
					</div>
				) : (
					<p>No projects yet.</p>
				)}
			</section>
		</>
	);
};

export const getStaticProps: GetStaticProps<PropType> = async () => {
	return {
		props: { projects }
	};
};

export default PortfolioPage;
