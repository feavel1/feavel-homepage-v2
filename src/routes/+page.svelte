<script>
	import AnimatedLines from '../lib/animations/AnimatedLines.svelte';
	import Section from '../lib/components/card/Section.svelte';
	import ContactInfo from '../lib/components/card/ContactInfo.svelte';
	import WorksGrid from '../lib/components/WorksGrid.svelte';
	import SomeProject from '../lib/components/SomeProject.svelte';
	import SomeSecondProject from '../lib/components/SomeSecondProject.svelte';
	import SomeAlienProject from '../lib/components/SomeAlienProject.svelte';
	import Phylosophy from '../lib/components/Phylosophy.svelte';
	import MusicProjects from '../lib/components/MusicProjects.svelte';
	import VideoProjects from '../lib/components/VideoProjects.svelte';
</script>

<title>FEAVEL - HOME</title>

<div class="">
	<div class="max-w-xl min-h-screen px-4 flex flex-col content-center justify-center mx-auto">
		<p class="text-xs italic text-gray-600">“Pour Encourager les autres.” Voltaire</p>
		<AnimatedLines />
	</div>

	<Section color="dark:bg-slate-600">
		<p class="text-xs italic text-gray-500 py-2">
			Love means giving something you don't have to someone who doesn't want it. - Lacan
		</p>
		<div>⊛ 项目∔作品 ⊛</div>
		<p class="italic text-lg">Projects and Works🧑🏼‍💻</p>
		<WorksGrid />
	</Section>

	<Section color="dark:bg-slate-700">
		<p class="text-xs italic text-gray-500 py-2">I know that I know nothing - Socrat</p>
		⪀ 编程项目 ⩿
		<p class="italic text-lg">Coding🧑🏼‍💻</p>
		<SomeProject />
		<SomeSecondProject />
		<SomeAlienProject />
	</Section>

	<Section color="dark:bg-slate-800 ">
		<div>
			<p class="text-xs italic text-gray-500 py-2">
				Love means giving something you don't have to someone who doesn't want it. - Lacan
			</p>
			⊛ 哲学作品 ⊛
			<p class="italic text-lg">Philosophy and Psychoanalysis🧑🏼‍💻</p>
		</div>
		<Phylosophy />
	</Section>

	<Section color="dark:bg-neutral-700">
		☭ 音乐作品 ☭
		<p class="italic text-lg">Music Production and Mixing 📼</p>
		<MusicProjects />
	</Section>

	<Section color="dark:bg-neutral-600">
		影视作品
		<p class="italic text-lg">Film making🎥</p>
		<VideoProjects />
	</Section>

	<Section color="dark:bg-slae-700 flex flex-col justify-between">
		<div>
			<div class="text-right my-5">
				<p class="text-xs italic text-gray-500 py-2">
					Send me a text if you have any questions - Feavel
				</p>
				联系方式
				<p class="italic text-lg">Contact Info 📞</p>
			</div>

			<ContactInfo title="e-Mail" text="feavel@qq.com" chinese="邮箱" />

			<ContactInfo title="tel" text="+8613027929529" chinese="电话" />

			<ContactInfo title="wechat" text="tanuki20966" chinese="微信" />

			<div class="my-5 flex flex-col">
				<p class="italic text-lg">github</p>
				<a
					class="text-xl underline decoration-blue-400 hover:decoration-blue-100"
					href="https://github.com/feavel1">Baby feavel</a
				>
			</div>
		</div>

		<div class="text-sm">
			<p class="italic text-lg">
				view web page source code on github: <a
					class="text-xl underline decoration-blue-400 hover:decoration-blue-100"
					href="https://github.com/feavel1"
				>
					feavel1
				</a>
			</p>
			All Rights Reserved 2022 © Baby Feavel 🇷🇺🇨🇳
		</div>
	</Section>
</div>
