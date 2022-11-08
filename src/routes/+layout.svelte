<script>
	import '../app.css';
	import PageTransition from '$lib/animations/PageTransition.svelte';
	import Nav from '../lib/components/Nav.svelte';
	export let data;
</script>

<Nav />

<PageTransition key={data.url}>
	<slot />
</PageTransition>
