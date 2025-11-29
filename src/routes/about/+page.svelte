<script lang="ts">
	import Title from '$lib/title.svelte';

	import { resume } from '$lib/resume';
	import Icon from '$lib/icon.svelte';

	const now = new Date();

	const dateDisplay = {
		month: 'long',
		year: 'numeric'
	} as any;
</script>

<Title text="About me" />

<article class="my-10">
	<p>
		Armed with a degree in Computer Science from The University of South Florida and well over a
		decade of experience working with web technologies, I've been crafting cutting-edge web
		applications professionally since 2020. From streamlining core business operations for elite
		firms to pioneering Progressive Web Apps with JavaScript, I thrive on pushing boundaries and
		mastering new technologies. Dive into my online portfolio and you will see my fusion of passion,
		expertise, and innovation. Let's elevate user experiences together. Regardless of platform, I
		can be your go-to expert for top-notch frontend development.
	</p>
	<h2>Experience</h2>
	<ul class="exp-list ms-1">
		{#each resume.professionalExperience as exp}
			<li class="pb-16 pl-6 border-l-2 border-l-slate-700 text-4xl relative last:pb-0">
				<div class="flex justify-between">
					<h3 class="leading-none text-sm mb-4">
						<div class="text-rose-400 text-xl">
							{exp.title}
						</div>
						<span class="text-slate-400">at</span>
						<strong>{exp.employer}</strong>
					</h3>
					<div class="text-end text-lg leading-none">
						<div>
							{exp.date.from.toLocaleDateString('en-us', dateDisplay)}
							-
							{exp.date.to?.toLocaleDateString('en-us', dateDisplay) ?? 'Present'}
						</div>
						<div class="text-sm text-slate-400">{exp.date.toDuration()}</div>
					</div>
				</div>

				<ul class="list-['-'] text-base marker:text-slate-300 ps-2">
					{#each exp.details as detail}
						<li class="ps-2">{detail}</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
	<h2>Education</h2>
	<ul class="exp-list ms-1">
		{#each resume.education as ed}
			<li class="pb-16 pl-6 border-l-2 border-l-slate-700 text-4xl relative last:pb-0">
				<div class="flex justify-between">
					<h3 class="leading-none text-sm mb-4">
						<div class="text-rose-400 text-xl">
							{ed.diploma}
						</div>
						<span class="text-slate-400">from</span>
						<strong>{ed.school}</strong>
					</h3>
					<div class="text-end text-lg leading-none">
						<div>
							Graduated {ed.date.to?.toLocaleDateString('en-us', dateDisplay)}
						</div>
					</div>
				</div>

				{#if ed.notableClasses}
					<h4 class="mb-1 text-slate-200 text-lg uppercase spacing">
						<strong>Notable Classes</strong>
					</h4>
					<ul class="list-['-'] text-base marker:text-slate-300 ps-2">
						{#each ed.notableClasses as course}
							<li class="ps-2">{course}</li>
						{/each}
					</ul>
				{/if}
			</li>
		{/each}
	</ul>
	<h2>Certifications</h2>
	<div class="flex flex-wrap">
		{#each resume.certifications as cert}
			<div class="bg-slate-900 min-w-80 flex p-4 border-2 border-slate-600 items-center">
				{#if cert.badgeUrl}
					<img
						src={cert.badgeUrl}
						alt={`Badge for ${cert.title} from ${cert.issuer}`}
						class="me-4 h-36 -ms-4"
					/>
				{/if}
				<div class="mx-4">
					<h3 class="text-xl mb-1"><strong>{cert.title}</strong></h3>
					<h4 class="text-slate-300">{cert.issuer}</h4>
					<div class="text-sm mt-4">
						Issued {cert.issued.toLocaleDateString('en-US', dateDisplay)}
					</div>
					{#if cert.link}
						<div class="mt-4 mb-2 -me-3">
							<a
								href={cert.link.href}
								target="_blank"
								rel="noopener noreferrer"
								class="btn btn-sm btn-border border-slate-600 bg-slate-800"
								>{cert.link.text} <Icon symbol="launch" size="sm"></Icon></a
							>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
	<h2>Skills</h2>
	<ul class="flex flex-wrap items-center">
		{#each resume.skills as skill}
			<li
				class="flex items-center rounded px-2 py-1 m-1 bg-slate-900"
				title={`Since ${skill.year}`}
			>
				<div>{skill.name}</div>
				<div class="inline-block w-1 h-1 rounded-full bg-slate-800 mx-1"></div>
				<span class="text-slate-300 text-sm uppercase"> {now.getFullYear() - skill.year}Y</span>
			</li>
		{/each}
	</ul>
</article>

<style lang="postcss">
	h2 {
		@apply text-4xl font-bold mb-6 mt-12 text-cyan-400 uppercase;
	}

	p {
		@apply mb-4 text-base last:mb-0;
	}

	.exp-list > li::before {
		position: absolute;
		content: ' ';
		@apply size-7 bg-slate-200 border-slate-950;
		left: -0.9rem;
		top: 0px;

		border-width: 10px;
	}
</style>
