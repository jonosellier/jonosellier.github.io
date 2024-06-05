<script lang="ts">
	import './icons.css';
	export let symbol: string;
	export let size = 'xl';
</script>

{#if symbol.startsWith('bi-')}
	<i class={symbol + ' text-' + size}></i>
{:else}
	<i class={'material-symbols-outlined text-' + size}>
		{symbol}
	</i>
{/if}
