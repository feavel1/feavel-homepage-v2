<script>
	import { browser } from '$app/environment';

	let darkMode = true;

	function handleSwitchDarkMode() {
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}
</script>

<nav class="fixed flex justify-center w-full py-2 text-sm  ">
	<a class="mx-5 dark:hover:text-gray-700 hover:text-slate-500 p-2.5 rounded-lg" href="about"
		>关于</a
	>
	<a class="mx-5 dark:hover:text-gray-700 hover:text-slate-500 p-2.5 rounded-lg" href="/">主页</a>
	<button
		class="mx-5 dark:hover:text-gray-700 hover:text-slate-500 rounded-lg w-10"
		on:click={handleSwitchDarkMode}
	>
		<c>{darkMode ? '☼' : '☾'} </c>
	</button>
</nav>
