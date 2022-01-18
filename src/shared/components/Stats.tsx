import config from 'shared/config';

const Stats = () => {
	return (
		<div className="card mb-4">
			<div className="card-body">
				<h3>Github Stats</h3>
				<div className="d-flex flex-wrap gap-2">
					<img
						className="img-fluid h-100"
						src={config.urls.ghStats}
						alt="OscarM3615's Github Stats"
					/>
					<img
						className="img-fluid h-100"
						src={config.urls.ghLangs}
						alt="Most Used Languages"
					/>
				</div>
			</div>
		</div>
	);
};

export default Stats;
