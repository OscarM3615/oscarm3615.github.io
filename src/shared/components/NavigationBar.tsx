import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const NavigationBar = () => {
	return (
		<Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
			<Container fluid>
				<Link href="/" passHref>
					<Navbar.Brand>Óscar Miranda</Navbar.Brand>
				</Link>

				<Navbar.Toggle />
				<Navbar.Collapse>
					<Nav className="ms-auto">
						<NavLink exact href="/">
							About
						</NavLink>
						<NavLink href="/resume">Resume</NavLink>
						<NavLink href="/portfolio">Portfolio</NavLink>
						<NavLink href="/blog">Blog</NavLink>
						<NavLink href="/contact">Contact</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

type NavLinkProps = {
	href: string;
	children: string;
	exact?: boolean;
};

const NavLink = ({ href, children, exact = false }: NavLinkProps) => {
	const { pathname } = useRouter();

	const isActive = exact ? pathname === href : pathname.startsWith(href);

	return (
		<Link href={href} passHref>
			<Nav.Link className={isActive ? 'active' : ''}>{children}</Nav.Link>
		</Link>
	);
};

export default NavigationBar;
