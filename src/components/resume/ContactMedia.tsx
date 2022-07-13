type ContactMediaProps = {
	email: string;
	phone: string;
	location: string;
	linkedin: string;
	website: string;
};

const ContactMedia = ({
	email,
	phone,
	location,
	linkedin,
	website
}: ContactMediaProps) => {
	return (
		<div className="row">
			<div className="col">
				<p className="small">
					<i className="bi bi-envelope-fill text-danger"></i> {email}
				</p>
				<p className="small">
					<i className="bi bi-geo-alt-fill text-danger"></i> {location}
				</p>
				<p className="small">
					<i className="bi bi-globe text-danger"></i> {website}
				</p>
			</div>
			<div className="col">
				<p className="small">
					<i className="bi bi-phone-fill text-danger"></i> {phone}
				</p>
				<p className="small">
					<i className="bi bi-linkedin text-danger"></i> {linkedin}
				</p>
			</div>
		</div>
	);
};

export default ContactMedia;
