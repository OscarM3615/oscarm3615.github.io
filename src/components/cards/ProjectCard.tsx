import type Project from 'shared/models/project';

type PropType = {
	project: Project;
};

const ProjectCard = ({ project }: PropType) => {
	return (
		<div className="card h-100">
			<img
				src={project.pictureUrl}
				className="card-img-top border-bottom"
				alt={project.title}
			/>

			<div className="card-body">
				<h4 className="card-title">{project.title}</h4>
				<p className="card-text">{project.description}</p>

				<a
					className="text-secondary"
					href={project.liveUrl}
					target="_blank"
					rel="noreferrer"
				>
					See live site <i className="bi bi-arrow-right"></i>
				</a>
			</div>

			<footer className="card-footer d-flex gap-1">
				{project.tags.map(tag => (
					<span key={tag} className="badge bg-secondary">
						{tag}
					</span>
				))}
			</footer>
		</div>
	);
};

export default ProjectCard;
