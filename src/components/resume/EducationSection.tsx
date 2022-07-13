import education from 'data/education';

const EducationSection = () => {
	return (
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
	);
};

export default EducationSection;
