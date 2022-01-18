import type Project from 'shared/models/project';

const projects: Project[] = [
	{
		title: 'This portfolio',
		description: 'My own website with resume, portfolio and blog',
		pictureUrl: '/images/portfolio.png',
		liveUrl: 'https://oscarm3615.github.io/',
		tags: ['nextjs', 'react', 'bootstrap']
	},
	{
		title: 'Las Paredes Hablan',
		description: 'Website created to promote the realisation of murals',
		pictureUrl: '/images/las-paredes-hablan.png',
		liveUrl: 'https://lasparedeshablan-3615.web.app/',
		tags: ['angular', 'bootstrap']
	},
	{
		title: 'Bite API',
		description: 'RESTful API for product trading/management',
		pictureUrl: '/images/bite-api.png',
		liveUrl: 'https://biteappjrz.herokuapp.com/',
		tags: ['python', 'backend', 'api']
	},
	{
		title: 'Social Media Dashboard',
		description: 'Responsive social dashboard UI with theme switcher',
		pictureUrl: '/images/social-media-dashboard.png',
		liveUrl: 'https://social-media-dashboard-taupe.vercel.app/',
		tags: ['react', 'frontendmentor']
	},
	{
		title: 'Bootcamp Testimonials Slider',
		description: 'Simple responsive UI created with React',
		pictureUrl: '/images/bootcamp-testimonials-slider.png',
		liveUrl: 'https://coding-bootcamp-testimonials-slider-theta.vercel.app/',
		tags: ['react', 'frontendmentor']
	}
];

export default projects;
