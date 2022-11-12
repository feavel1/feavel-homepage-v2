<script>
	export let props;
</script>

<div class="flex justify-center {props}">
	<div
		class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-slate-700 border border-slate-600 shadow-lg"
	>
		<div class="p-6 flex flex-col justify-start">
			<slot />
		</div>
	</div>
</div>
