<script lang="ts">
	import { marked } from 'marked';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	const { slug } = $page.params;

	let articleHtml = '';

	async function loadArticle() {
		const mdText = await (await fetch(`${slug}.md`)).text();

		articleHtml = await marked.parse(mdText);
	}

	onMount(loadArticle);
</script>

<div class="mb-8"><a class="btn" href="/writing">All articles</a></div>
<article class="article mb-64">
	{@html articleHtml}
</article>
