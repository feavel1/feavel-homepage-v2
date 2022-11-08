<script>
	export let title;
	export let text;
	export let classes;
</script>

<div
	class="{classes} md:w-96 mx-auto flex flex-col justify-between
	 bg-stone-300 dark:bg-stone-800 md:dark:hover:bg-stone-900 md:text-gray-500
	 group duration-500 rounded-md p-5"
>
	<div class="dark:group-hover:text-white group-hover:text-black duration-500">
		<h1
			class="font-serif font-semibold text-center text-3xl group-hover:text-pink-400 duration-500"
		>
			{title}
		</h1>
		<p class="font-black text-center my-4 text-xl">{text}</p>
		<slot />
	</div>

	<div class="mt-2 text-3xl font-light text-center ">
		<a
			class="decoration-sky-500 hover:decoration-sky-700 underline dark:group-hover:text-sky-300 duration-100"
			href="/src/public/baby-feavel-home-1.gif"
			download="baby-feavel-home-1.gif"
		>
			中文 - PDF - 下载
		</a>

		<a
			class="decoration-sky-500 hover:decoration-sky-700 underline dark:group-hover:text-pink-300 duration-100"
			href="/src/public/baby-feavel-home-1.gif"
			download="baby-feavel-home-1.gif">Download PDF in English</a
		>
	</div>
</div>
