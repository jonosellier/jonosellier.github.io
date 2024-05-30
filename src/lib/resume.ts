export type ResumeData = {
	education: Education[];
	professionalExperience: Experience[];
	skills: string[];
};

export type Education = {
	school: string;
	diploma: string;
	date: DateRange;
	notableClasses?: string[];
};

export type Experience = {
	title: string;
	employer: string;
	date: DateRange;
	description: string[];
};

export class DateRange {
	constructor(
		public from: Date,
		public to?: Date
	) {}

	toDuration() {
		const to = this.to ?? new Date();
		const from = this.from;
		let months = (to.getFullYear() - from.getFullYear()) * 12;
		months -= from.getMonth();
		months += to.getMonth();

		if (months < 12) {
			return `${months} months`;
		}

		if (months % 12 === 0) {
			return `${months / 12} years`;
		}

		return `${months / 12} years, ${months % 12} months`;
	}
}

export const resume = {
	education: [
		{
			school: 'University of Trinidad and Tobago',
			diploma: 'Diploma in Software Engineering',
			date: new DateRange(new Date('1st September 2013'), new Date('1st June 2015'))
		},
		{
			school: 'Hillsborough Community College',
			diploma: 'Associate of Arts in Computer Science',
			date: new DateRange(new Date('1st August 2016'), new Date('1st May 2017'))
		},
		{
			school: 'University of South Florida',
			diploma: 'Bachelor of Science in Computer Science',
			date: new DateRange(new Date('1st August 2017'), new Date('1st May 2020')),
			notableClasses: [
				'Intro to AI',
				'Advanced JavaScript',
				'Database Design',
				'Software Development for Mobile Devices',
				'Social Media Mining',
				'IoT Systems Design'
			]
		}
	],
	professionalExperience: [
		{
			title: 'IT Assistant',
			employer: 'Guardian Group of Companies',
			date: new DateRange(new Date('1st May 2016'), new Date('1st June 2016')),
			description: [
				'Temp. contract',
				'Helped carry out the hardware upgrade procedures taking place across Guardian Group’s companies including data transfer and additional configuration on the machines. I also provided help desk support for common IT-related issues beyond the scope of my original employment when my supervisor became aware of my aptitude for computers and troubleshooting. Was quickly allowed to work semi-independantly for certain locations.'
			]
		},
		{
			title: 'Recreation and Wellness Staff',
			employer: 'University of South Florida',
			date: new DateRange(new Date('1st May 2019'), new Date('1st December 2019')),
			description: [
				"Primarily my responsibilities were to facilitate access, equipment rental and, room reservations. I was also tasked to respond appropriately to medical and other emergencies, and give tours as needed. I distinguished myself within this position with minor technical support relating to automatic access control devices that was outside my official responsibilities. However, I felt that it was within my duty to troubleshoot any ongoing issues in my downtime as it may hinder the entire team's performance during more busy hours. I was reccomended by my manager to apply for a supervisor position in December."
			]
		},
		{
			title: 'Recreation and Wellness Supervisor',
			employer: 'University of South Florida',
			date: new DateRange(new Date('1st December 2019'), new Date('1st May 2020')),
			description: [
				'In addition to my regular staff responsibilities I was also tasked with opening and closing all facilities as needed, handling and managing situations as a designated point of contact as well as handling the sale and renewal of memberships. I have also made an effort to make sure that newer staff members are aware of all procedures and details within the gym and are able to perform to the best of their ability, and be more independent at work. I left this position upon graduation to pursue a career in Web-App development.'
			]
		},
		{
			title: 'Software Engineer',
			employer: 'Boson Software',
			date: new DateRange(new Date('1st May 2020'), new Date('1st December 2023')),
			description: [
				'My primary role at Boson Software is the development and support of a web-based version of <a href="https://exams.boson.com">ExSim-Max</a>, a testing suite designed primarily for IT certification practice exams.',
				'A notable achievement beyond the scope of my duties was how I have optimized the creation of custom-made simulation questions by creating both data structures to represent common types of simulation questions as well as a GUI for rapid creation. The resulting gains in productivity turn week-long tasks into day-long tasks as well as allowed colleagues in non-technical roles to make minor changes without the assistance of developers. I have also successfully pushed for product documentation to me moved from a PDF to a searchable, responsive documentation site.',
				'I also provide support for our Windows-only version (branded as Boson Exam Environment) by creating duplicating work done for the web version with custom-made "simulation questions" which are VB or C# programs to simulate more complicated questions. Items include virtual terminals, drag and drop questions, and both desktop and mobile device configuration.',
				'My primary focus is front-end work but I have utilized a variety of technologies at my current role beyond front-end development such as such as NestJS, MSSQL Server, and Capacitor.'
			]
		}
	],
	skills: [
		'Angular',
		'JavaScript',
		'TypeScript',
		'.NET (C#)',
		'WebSockets',
		'Adobe Creative Cloud',
		'Python',
		'VisualBasic',
		'Express',
		'NextJS',
		'Object Oriented Design',
		'Functional Programming',
		'Search Engine Optimization',
		'Web Accessibility',
		'Web Animations',
		'CSS',
		'SCSS',
		'Azure',
		'Bash',
		'Linux',
		'AWS'
	]
} as const satisfies ResumeData;
