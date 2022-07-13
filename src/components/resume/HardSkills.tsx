import skills from 'data/skills';

const HardSkills = () => {
	return (
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
	);
};

export default HardSkills;
