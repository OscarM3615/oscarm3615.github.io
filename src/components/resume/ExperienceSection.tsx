import experience from 'data/experience';

const ExperienceSection = () => {
	return (
		<section className="pb-4">
			<h4 className="text-primary">
				<i className="bi bi-diamond-fill"></i> Work Experience
			</h4>

			{experience.map(item => (
				<div key={item.institution} className="mb-2">
					<p className="fs-5 mb-0">
						{item.position} <em className="text-muted">- {item.institution}</em>
					</p>
					<small className="text-danger fst-italic">
						{item.startDate} — {item.endDate}
					</small>
					<p>{item.description}</p>
				</div>
			))}
		</section>
	);
};

export default ExperienceSection;
