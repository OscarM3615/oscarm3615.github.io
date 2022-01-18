import Head from 'next/head';
import ContactForm from 'components/forms/ContactForm';
import config from 'shared/config';

const ContactPage = () => {
	return (
		<>
			<Head>
				<title>Contact | {config.title}</title>
			</Head>

			<section>
				<h3 className="text-center mb-4">Contact Form</h3>

				<ContactForm />
			</section>
		</>
	);
};

export default ContactPage;
