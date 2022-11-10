<script>
	export let color;
	export let SectionId;
</script>

<div class="min-h-screen p-5 text-5xl {color}" id={SectionId}>
	<slot />
</div>
