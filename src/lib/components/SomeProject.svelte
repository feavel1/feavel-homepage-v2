<script>
	import GearIcon from '../../public/svg/GearIcon.svelte';
	import Typing from './Typing.svelte';
	import img1 from '../../public/img/home-feavel-1.gif';
	import img2 from '../../public/img/home-feavel-2.png';
	import img3 from '../../public/img/home-feavel-3.png';
</script>

<main class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
	<div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
		<div
			class=" relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1"
		>
			<h1
				class="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white"
			>
				<!-- <c class="text-gray-500 italic"> (Second)</c> -->
				Home Page
			</h1>

			<p class="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">
				官网主页
			</p>
		</div>
		<div
			class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0"
		>
			<img
				src={img1}
				alt=""
				class="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
				loading="lazy"
			/>
			<img
				src={img2}
				alt=""
				class="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
				loading="lazy"
			/>
			<img
				src={img3}
				alt=""
				class="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32"
				loading="lazy"
			/>
		</div>
		<dl
			class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2"
		>
			<dt class="sr-only">Stack</dt>
			<dd class="text-gray-600 flex items-center dark:text-gray-400">
				<GearIcon />
				<span class="hidden md:inline-block">
					Stack
					<span class="text-slate-400 font-normal ">(语言)</span>
				</span>
			</dd>
			<dt class="sr-only">Location</dt>
			<dd class="flex items-center">
				<svg
					width="2"
					height="2"
					aria-hidden="true"
					fill="currentColor"
					class="mx-3 text-slate-300"
				>
					<circle cx="1" cy="1" r="1" />
				</svg>

				<Typing>
					<a class="hover:text-orange-400 hover:underline" href="https://kit.svelte.dev">SVELTE</a>
					+
					<a class="hover:text-blue-400 hover:underline" href="https://tailwindcss.com">TAILWIND</a>
					= feavel.com
				</Typing>
			</dd>
		</dl>
		<div
			class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4"
		>
			<a
				type="button"
				href="https://github.com/feavel1/feavel-homepage-v2"
				target="blank"
				class="bg-stone-500 text-white text-sm leading-6 font-mono font-medium py-2 px-3 rounded-md transition hover:bg-indigo-400 duration-200"
				>Source Code \ 下载原码
			</a>
		</div>
		<p
			class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400 font-thin italic indent-8"
		>
			My previous web page was slow, so I rebuilt the whole page. This time I decided to use a light
			weight framework - svelte, and an easy use css library - tailwind. All the animations on the
			page are made with vanilla svelte and css manipulation. No aditional js libraries were used.
		</p>
	</div>
</main>
