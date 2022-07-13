type ActivityIconProps = {
	icon: string;
	title: string;
	description: string;
};

const ActivityIcon = ({ icon, title, description }: ActivityIconProps) => {
	return (
		<div className="col-12 col-md-6 text-center">
			<i className={`bi ${icon} text-primary fs-1`}></i>
			<p className="fw-bold mb-0">{title}</p>
			<p className="text-muted">{description}</p>
		</div>
	);
};

export default ActivityIcon;
