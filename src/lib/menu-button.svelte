<script lang="ts">
	import Icon from './icon.svelte';
	import { menuOpen } from './menu-state.store';
</script>

<button
	class="fixed top-0 left-0 m-5 z-50 md:hidden text-white px-1"
	class:glitch1={!$menuOpen}
	class:glitch2={$menuOpen}
	on:click={() => menuOpen.set(!$menuOpen)}
>
	<Icon symbol={$menuOpen ? 'close' : 'menu'}></Icon>
</button>

<style>
	.glitch1 {
		animation: glitch1 200ms linear forwards;
	}

	@keyframes glitch1 {
		0%,
		100% {
			transform: skew(0, 0);
			box-shadow: none;
		}

		25%,
		75% {
			transform: skew(15deg);
			background-color: white;
			-webkit-text-stroke: 4px solid var(--prim-2);
			backdrop-filter: drop-shadow(4px 4px 4px var(--prim-2));
		}

		50% {
			background-color: var(--prim-1);
			-webkit-text-stroke: 4px solid var(--prim-1);
		}
	}

	.glitch2 {
		animation: glitch2 200ms linear forwards;
	}

	@keyframes glitch2 {
		0%,
		100% {
			transform: skew(0, 0);
			box-shadow: none;
		}

		25%,
		75% {
			transform: skew(-15deg);
			background-color: white;
			-webkit-text-stroke: 4px solid var(--prim-2);
		}

		50% {
			background-color: var(--prim-2);
			-webkit-text-stroke: 4px solid var(--prim-1);
		}
	}
</style>
