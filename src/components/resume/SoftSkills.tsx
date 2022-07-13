import softSkills from 'data/soft-skills';

const SoftSkills = () => {
	return (
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
	);
};

export default SoftSkills;
