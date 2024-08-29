<script>
	import '../app.css';
	import { page } from '$app/stores';
	import Footer from '$lib/footer.svelte';
	import { menuOpen } from '$lib/menu-state.store';
	import MenuButton from '$lib/menu-button.svelte';
	import { media } from '$lib/media';

	$: location = $page.url.pathname;
</script>

<svelte:head>
	<title>JonoSellier | GitHub Pages</title>
</svelte:head>
<div class="text-white bg-gray-950 min-h-lvh">
	<nav
		class="fixed py-20 px-6 flex-grow-0 top-0 h-dvh me-10 left-0 w-56 bg-gray-950 border-r border-cyan-400 md:border-r-0 z-50 duration-200"
		class:menu-hidden={!$menuOpen}
	>
		<ul class="w-min mx-auto">
			<li>
				<a class="block menu-btn m-1 text-lg w-full my-6" class:active={location === '/'} href="/"
					>Home</a
				>
			</li>
			<li>
				<a
					class="block menu-btn m-1 text-lg w-full my-6"
					class:active={location === '/about'}
					href="/about">About me</a
				>
			</li>
			<li>
				<a
					class="block menu-btn m-1 text-lg w-full my-6"
					class:active={location === '/projects'}
					href="/projects">Projects</a
				>
			</li>
			<li>
				<a
					class="block menu-btn m-1 text-lg w-full my-6"
					class:active={location === '/writing'}
					href="/writing">Writing</a
				>
			</li>
		</ul>
	</nav>
	{#if $menuOpen}<div
			class="fixed top-0 bottom-0 inset-0 z-40 md:hidden"
			on:click={() => menuOpen.set(false)}
			on:keydown={() => void 0}
			role="presentation"
		></div>
	{/if}
	<div class="py-20 flex flex-col content-container px-4 mx-0 min-h-dvh">
		<main class="mx-auto w-full max-w-5xl flex-grow">
			<slot />
		</main>
		<Footer></Footer>
	</div>
</div>

{#if !media.prefersReducedMotion()}
	<div class="fixed top-0 left-0 w-full h-dvh crt-overlay z-50"></div>
{/if}

<MenuButton></MenuButton>

<style>
	.content-container {
		max-width: 100%;
	}

	@media screen and (min-width: 768px) and (max-width: 1530px) {
		.content-container {
			padding-left: 15rem;
		}
	}

	@media screen and (max-width: 767.999px) {
		.menu-hidden {
			translate: -14.5rem;
		}
	}

	.crt-overlay {
		background: linear-gradient(to top, #00000010, #00000010, #24242410, #24242410);
		background-size: cover;
		background-size: 100% 8px;
		background-blend-mode: color-dodge;
		pointer-events: none;
		animation: scanline 6s linear infinite;
	}

	@keyframes scanline {
		from {
			background-position: 0 0;
		}
		to {
			background-position: 0 -40px;
		}
	}
</style>
