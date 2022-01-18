import config from 'shared/config';

const MAIL_API = `https://formsubmit.co/ajax/${config.email}`;

export const sendEmail = async (
	name: string,
	replyto: string,
	message: string
): Promise<any> => {
	const response = await fetch(MAIL_API, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify({
			_subject: 'New email from portfolio',
			_template: 'table',
			name: name,
			email: replyto,
			message: message
		})
	});

	return await response.json();
};
