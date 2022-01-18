import Experience from 'shared/models/experience';

const experience: Experience[] = [
	{
		institution: 'Las Paredes Hablan',
		position: 'Front-end developer',
		startDate: 'February 2021',
		endDate: 'May 2021',
		description:
			'Built the website using Angular and Bootstrap for the UI, and implemented Google Analytics to trace application use.'
	},
	{
		institution: 'Social Service at UACJ',
		position: 'Programmer',
		startDate: 'February 2021',
		endDate: 'June 2021',
		description:
			'Created web scrapers to get jobs information from Indeed and OCC websites and a library in R to download COVID-19 data.'
	},
	{
		institution: 'Bite API',
		position: 'Back-end developer',
		startDate: 'October 2020',
		endDate: 'January 2021',
		description:
			'Developed a RESTful API with Python and Flask to allow users to post and trade products in their area. The frontend client is still on development.'
	}
];

export default experience;
