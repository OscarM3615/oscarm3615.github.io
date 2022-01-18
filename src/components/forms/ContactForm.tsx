import { useState, FormEvent } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import MailSentModal from 'components/modals/MailSentModal';
import { sendEmail } from 'utils/mail';

const ContactForm = () => {
	const [fullname, setFullname] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [formValidated, setFormValidated] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const submitForm = (event: FormEvent) => {
		event.preventDefault();

		setFormValidated(true);
		if (!(event.target as HTMLFormElement).checkValidity()) return;

		sendEmail(fullname, email, message)
			.then(() => {
				setFullname('');
				setEmail('');
				setMessage('');

				setFormValidated(false);
				setShowModal(true);
			})
			.catch(err => {
				console.error(err);
			});
	};

	return (
		<>
			<Form noValidate validated={formValidated} onSubmit={submitForm}>
				<Form.Group className="mb-3">
					<Form.Label>Full name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Your name"
						value={fullname}
						onChange={e => setFullname(e.target.value)}
						required
					/>
					<Form.Control.Feedback type="invalid">
						The name is required
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						placeholder="Your email"
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
					/>
					<Form.Control.Feedback type="invalid">
						The email is required
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Your message</Form.Label>
					<Form.Control
						as="textarea"
						placeholder="Your message"
						rows={6}
						value={message}
						onChange={e => setMessage(e.target.value)}
						required
					/>
					<Form.Control.Feedback type="invalid">
						The message is required
					</Form.Control.Feedback>
				</Form.Group>

				<div className="d-flex justify-content-end">
					<Button variant="primary" type="submit">
						Send message
					</Button>
				</div>
			</Form>

			<MailSentModal show={showModal} handleClose={() => setShowModal(false)} />
		</>
	);
};

export default ContactForm;
