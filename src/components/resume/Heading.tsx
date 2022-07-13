import config from 'shared/config';
import ContactMedia from './ContactMedia';
import type GithubUser from 'shared/models/github-user';

type HeadingProps = {
	name: string;
	position: string;
	ghUser: GithubUser;
};

const Heading = ({ name, position, ghUser }: HeadingProps) => {
	return (
		<section className="pb-4">
			<p className="fs-1 text-primary mb-0">{name}</p>
			<p className="fs-5 text-danger">{position}</p>

			<ContactMedia
				email={config.email}
				phone={config.phone}
				location={ghUser.location}
				linkedin={config.linkedin}
				website={ghUser.blog}
			/>
		</section>
	);
};

export default Heading;
