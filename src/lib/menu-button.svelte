<script lang="ts">
	import Icon from './icon.svelte';
	import { menuOpen } from './menu-state.store';
</script>

<button
	class="fixed top-0 left-0 m-5 z-10 md:hidden text-white"
	class:glitch1={$menuOpen}
	class:glitch2={!$menuOpen}
	on:click={() => menuOpen.set(!$menuOpen)}
>
	<Icon symbol={!$menuOpen ? 'close' : 'menu'}></Icon>
</button>

<style>
	.glitch1 {
		animation: glitch1 200ms steps(4, start) forwards;
	}

	@keyframes glitch1 {
		0%,
		100% {
			transform: skew(0, 0);
			box-shadow: none;
			background-color: transparent;
		}

		20%,
		60% {
			box-shadow:
				2px 0px 0px 1px var(--prim-2),
				-3px 4px 0 1px var(--prim-1);
			background-color: black;
			color: var(--prim-1);
		}

		40%,
		80% {
			box-shadow:
				-2px 0px 0px 1px var(--prim-2),
				3px -2px 0 1px var(--prim-1);
			background-color: white;
			color: var(--prim-2);
		}
	}

	.glitch2 {
		animation: glitch2 200ms steps(4, start) forwards;
	}

	@keyframes glitch2 {
		0%,
		100% {
			transform: skew(0, 0);
			box-shadow: none;
			background-color: transparent;
		}

		40%,
		80% {
			box-shadow:
				2px 0px 0px 1px var(--prim-2),
				-3px 4px 0 1px var(--prim-1);
			background-color: black;
			color: var(--prim-1);
		}

		20%,
		60% {
			box-shadow:
				-2px 0px 0px 1px var(--prim-2),
				3px -2px 0 1px var(--prim-1);
			background-color: white;
			color: var(--prim-2);
		}
	}
</style>
