import ActivityIcon from 'components/ActivityIcon';

type AboutMeProps = {
	bio?: string;
};

const AboutMe = ({ bio }: AboutMeProps) => {
	return (
		<div>
			<h3 className="mt-4">About Me</h3>
			<p>{bio ?? 'Bio not available.'}</p>

			<h4 className="mt-4">What I'm Doing</h4>

			<div className="row">
				<ActivityIcon
					icon="bi-code-slash"
					title="Web Development"
					description="Modern web applications"
				/>
				<ActivityIcon
					icon="bi-braces"
					title="Open Source"
					description="Collaborating on cool Github projects"
				/>
			</div>
		</div>
	);
};

export default AboutMe;
