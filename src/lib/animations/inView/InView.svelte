<script>
	import { onMount } from 'svelte';
	let isVisible = false;
	let element;

	onMount(() => {
		const handleIntersect = (e) => {
			isVisible = e[0].isIntersecting;
		};
		const root = null;
		const rootMargin = `100px 0px -100px 0px`;
		const options = { root, rootMargin };

		const observer = new IntersectionObserver(handleIntersect, options);
		observer.observe(element);
	});
</script>

<div bind:this={element}>
	<slot {isVisible} />
</div>
