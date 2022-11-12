<script>
	export let href;
	export let download;
	export let target;
</script>

<a
	type="button"
	{href}
	{download}
	{target}
	data-mdb-ripple="true"
	data-mdb-ripple-color="light"
	class="my-4 w-fit  px-6 py-3 bg-stone-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-stone-700 hover:shadow-lg focus:bg-stone-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-800 active:shadow-lg transition duration-150 ease-in-out"
>
	<slot />
</a>
