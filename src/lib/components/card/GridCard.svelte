<script>
	export let props;
</script>

<div
	class="rounded-md h-48 p-3 md:hover:bg-slate-100 md:dark:hover:bg-slate-700  border border-slate-500 {props}"
>
	<slot />
</div>
