<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	const lines = ['∲欢迎来到∲', 'BABY FEAVEL', '的', '新', '主页', '🆕'];
	let ready = false;
	onMount(() => (ready = true));
</script>

<!-- <svelte:window bind:scrollY={scroll} /> -->

{#if ready}
	<div class="lines">
		{#each lines as line, i}
			<div class="overflow">
				<span
					class="line"
					in:fly={{
						y: 100,
						delay: 400 * i
						// easing: backOut
					}}
				>
					{line}
				</span>
			</div>
		{/each}
	</div>
{/if}

<style>
	.lines {
		/* max-width: 800px; */
		font-size: 3rem;
		font-weight: 900;
		text-align: center;
	}
	.overflow {
		display: inline-block;
		overflow: hidden;
		vertical-align: bottom;
	}

	.line {
		display: inline-block;
		margin: 0.2rem;
		text-transform: uppercase;
		text-shadow: 2px 0 10px hsl(0 0% 0% / 40%);
	}
</style>
