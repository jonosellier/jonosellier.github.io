<script>
	import Icon from '$lib/icon.svelte';
	import '../app.css';
	import { page } from '$app/stores';
	import Footer from '$lib/footer.svelte';

	$: location = $page.url.pathname;
</script>

<div class="text-white bg-gray-950 min-h-lvh flex">
	<header class="sticky py-20 px-6 flex-grow-0 top-0 h-min me-10 left-0 w-2/12">
		<div class="w-min mx-auto">
			<a class="block menu-btn m-1 text-lg w-full my-6" class:active={location === '/'} href="/"
				>Home</a
			>
			<a
				class="block menu-btn m-1 text-lg w-full my-6"
				class:active={location === '/about'}
				href="/about">About me</a
			>
			<a
				class="block menu-btn m-1 text-lg w-full my-6"
				class:active={location === '/projects'}
				href="/projects">Projects</a
			>
			<a
				class="block menu-btn m-1 text-lg w-full my-6"
				class:active={location === '/writing'}
				href="/writing">Writing</a
			>
		</div>
	</header>
	<div class="w-8/12 py-20 flex flex-col">
		<main class="mx-auto max-w-5xl flex-grow">
			<slot />
		</main>
		<Footer></Footer>
	</div>
</div>
