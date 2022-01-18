import SocialNetworks from 'components/SocialNetworks';
import config from 'shared/config';
import type GithubUser from 'shared/models/github-user';

type PropType = {
	user: GithubUser;
};

const ProfileCard = ({ user }: PropType) => {
	return (
		<div className="card">
			<img className="card-img-top" src={user.avatar_url} alt={user.name} />
			<div className="card-body">
				<h4 className="card-title">{user.name}</h4>
				<h5 className="card-subtitle text-primary">
					Web Developer{' '}
					{user.hireable && (
						<span className="badge rounded-pill bg-success">Hireable</span>
					)}
				</h5>

				<SocialNetworks />

				<p className="mb-2">
					<i
						className="bi bi-geo-alt text-primary"
						role="image"
						aria-label="Location"
					></i>{' '}
					{user.location}
				</p>
				<p className="mb-2">
					<i
						className="bi bi-envelope text-primary"
						role="image"
						arai-label="Email"
					></i>{' '}
					{config.email}
				</p>
				<p className="mb-2">
					<i
						className="bi bi-phone text-primary"
						role="image"
						aria-label="Phone"
					></i>{' '}
					{config.phone}
				</p>
			</div>
		</div>
	);
};

export default ProfileCard;
