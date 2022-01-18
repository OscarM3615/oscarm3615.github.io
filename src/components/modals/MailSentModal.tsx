import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

type PropType = {
	show: boolean;
	handleClose: () => void;
};

const MailSentModal = ({ show, handleClose }: PropType) => {
	return (
		<Modal show={show} onHide={handleClose} centered>
			<Modal.Header closeButton>
				<Modal.Title as="h5">Email sent</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				Your email was sent successfully, it'll be read as soon as posible!
			</Modal.Body>
			<Modal.Footer>
				<Button variant="primary" onClick={handleClose}>
					Ok
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default MailSentModal;
