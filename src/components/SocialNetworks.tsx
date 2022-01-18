import socialNetworks from 'data/social-networks';

const SocialNetworks = () => {
	return (
		<div className="d-flex flex-row justify-content-center gap-4 my-4">
			{socialNetworks.map(item => (
				<a
					key={item.label}
					href={item.link}
					className="link-dark text-decoration-none fs-4"
					title={item.label}
					target="_blank"
					rel="noreferrer"
				>
					<i
						className={`bi ${item.icon}`}
						role="img"
						aria-label={item.label}
					></i>
				</a>
			))}
		</div>
	);
};

export default SocialNetworks;
