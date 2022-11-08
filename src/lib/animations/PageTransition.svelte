<script>
	// import { slide } from 'svelte/transition';
	import { fly } from 'svelte/transition';
	// export let duration;
	export let key;
</script>

{#key key}
	<div in:fly={{ y: -50, duration: 550, delay: 600 }} out:fly={{ y: -50, duration: 550 }}>
		<slot />
	</div>
{/key}

<!-- {#key key}
	<div in:slide={{ duration, delay: duration }} out:slide={{ duration }}>
		<slot />
	</div>
{/key} -->
