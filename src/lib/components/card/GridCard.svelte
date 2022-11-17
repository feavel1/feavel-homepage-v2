<script>
	export let props;
</script>

<div
	class="rounded-md h-48 p-3 border border-slate-500 md:dark:hover:bg-slate-800 md:hover:bg-slate-300 transition-colors {props} duration-700"
>
	<slot />
</div>
