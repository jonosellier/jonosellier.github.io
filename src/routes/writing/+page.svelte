<script>
	import Title from '$lib/title.svelte';
	import { writingData } from '$lib/writing-data';
</script>

<Title text="Writing" />
<p class="mt-10">
	I'll never be nominated for a Pulitzer but I owe my entire career to people who took the time to
	figure out something interesting and write about it. This is my way of giving back. Some might be
	listacles, some might be tutorials. Whatever I found that I wanted to share will end up here.
</p>

<ul class="mt-20">
	{#each writingData as article}
		<li class="border-b border-slate-500 last:border-b-0">
			<a
				href={`./writing/${article.path}`}
				class="text-2xl font-bold block py-5 hover:text-cyan-500">{article.title}</a
			>
		</li>
	{/each}
</ul>
