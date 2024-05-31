export type ResumeData = {
	education: Education[];
	professionalExperience: Experience[];
	skills: { name: string; year: number }[];
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
	details: string[];
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

		if (months < 2) {
			return `1 month`;
		}

		if (months < 12) {
			return `${months} months`;
		}

		if (months % 12 === 0) {
			return `${months / 12} years`;
		}

		return `${(months / 12) | 0} years, ${months % 12} months`;
	}
}

export const resume = {
	education: [
		{
			school: 'University of Trinidad and Tobago',
			diploma: 'Diploma in Software Engineering',
			date: new DateRange(new Date('1 September 2013'), new Date('1 June 2015'))
		},
		{
			school: 'Hillsborough Community College',
			diploma: 'Associate of Arts in Computer Science',
			date: new DateRange(new Date('27 August 2016'), new Date('9 May 2017'))
		},
		{
			school: 'University of South Florida',
			diploma: 'Bachelor of Science in Computer Science',
			date: new DateRange(new Date('27 August 2017'), new Date('9 May 2020')),
			notableClasses: [
				'Intro to AI',
				'Advanced JavaScript',
				'Database Design',
				'Software Development for Mobile Devices',
				'Social Media Mining',
				'IoT Systems Design'
			]
		}
	].sort(sortByDate),
	professionalExperience: [
		{
			title: 'Software Engineer',
			employer: 'AdvancedMD',
			date: new DateRange(new Date('1 December 2023')),
			details: [
				'Maintain and develop both internal and customer-facing tools for one of the largest medical practice management software systems',
				'Develop new features with strong coding practices, ensure adequate test coverage, and manage user stories from development to production',
				'Present team accomplishments to key stakeholders and serve on the company-wide UI/UX committee',
				'Instrumental in setting development standards and creating a novel tool to help clients automate migration from third-party vendor services during technical failures, recognized by management for rapid translation of user requirements into production-grade code'
			]
		},
		{
			title: 'Software Engineer',
			employer: 'Boson Software',
			date: new DateRange(new Date('1 May 2020'), new Date('1 December 2023')),
			details: [
				'Developed and supported a web-based version of ExSim-Max, an IT certification practice exam suite',
				'Optimized custom simulation question creation with new data structures and a GUI, significantly increasing productivity and enabling non-technical staff to make minor changes independently',
				'Transitioned product documentation from PDF to a searchable, responsive site, developed independently',
				'Provided support for the Windows-only Boson Exam Environment, creating complex simulation questions using VB and C#',
				'80% front-end work 20% API and database work',
				'Utilized technologies such as Angular, TypeScript, NestJS, JavaScript, Capacitor, Svelte, C#, .NET, and SQL Server',
				'Became the company-wide expert on front-end design, shaping the design of multiple web applications and implementing a UI framework used in current and future products'
			]
		},
		{
			title: 'Recreation and Wellness Supervisor',
			employer: 'University of South Florida',
			date: new DateRange(new Date('1 December 2019'), new Date('1 May 2020')),
			details: [
				'Managed opening and closing facilities, handling situations as a designated point of contact, and managing membership sales and renewals',
				'Trained new staff on procedures and details within the gym, ensuring high performance and independence',
				'Demonstrated exceptional team-management skills and conflict-resolution skills by handling conflicts between guests or staff members'
			]
		},
		{
			title: 'Recreation and Wellness Staff',
			employer: 'University of South Florida',
			date: new DateRange(new Date('1 May 2019'), new Date('1 December 2019')),
			details: [
				'Facilitated access, equipment rental, and room reservations',
				'Responded to medical and other emergencies and provided tours as needed',
				'Provided minor technical support for access control devices, improving team performance during busy hours',
				'Recommended by manager for a supervisor position due to exemplary performance'
			]
		},
		{
			title: 'IT Assistant',
			employer: 'Guardian Group of Companies',
			date: new DateRange(new Date('1 May 2016'), new Date('1 June 2016')),
			details: [
				'Assisted in hardware upgrades, including data transfer and machine configuration',
				'Provided help desk support for IT-related issues beyond initial employment scope, recognized for aptitude in troubleshooting',
				'Granted semi-independent work at certain locations due to demonstrated capability'
			]
		}
	].sort(sortByDate),
	skills: [
		{ name: 'Angular', year: 2019 },
		{ name: 'RxJS', year: 2020 },
		{ name: 'JavaScript', year: 2013 },
		{ name: 'TypeScript', year: 2018 },
		{ name: '.NET (C#)', year: 2020 },
		{ name: 'Adobe Creative Cloud', year: 2020 },
		{ name: 'Python', year: 2019 },
		{ name: 'VisualBasic', year: 2020 },
		{ name: 'Express', year: 2019 },
		{ name: 'NestJS', year: 2021 },
		{ name: 'Object Oriented Design', year: 2017 },
		{ name: 'Functional Programming', year: 2018 },
		{ name: 'Search Engine Optimization', year: 2021 },
		{ name: 'Web Accessibility', year: 2021 },
		{ name: 'Web Animations', year: 2021 },
		{ name: 'CSS', year: 2013 },
		{ name: 'SCSS', year: 2020 },
		{ name: 'AWS', year: 2023 },
		{ name: 'Bash', year: 2019 },
		{ name: 'Linux', year: 2019 }
	]
} as const satisfies ResumeData;

function sortByDate(
	a: { date: { from: Date; to?: Date } },
	b: { date: { from: Date; to?: Date } }
) {
	return b.date.from.valueOf() - a.date.from.valueOf();
}
