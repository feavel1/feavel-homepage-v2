<script>
	import Button from './button/Button.svelte';
	import PhylosophyCard2 from './card/PhylosophyCard2.svelte';
</script>

<!-- svelte-ignore a11y-missing-attribute -->

<div class="md:mt-24 mt-4 max-w-6xl px-4 flex flex-col content-center justify-center mx-auto">
	<div class="grid md:grid-cols-2 place-content-center gap-3">
		<!-- CARD -->
		<PhylosophyCard2 props="md:col-span-2">
			<h5 class="text-xl font-medium mb-2 text-gray-500">精神分析中的时间</h5>
			<h1 class="font-serif font-semibold text-center text-3xl ">Time in Psychoanalysis</h1>
			<div
				class="w-fit font-medium text-sm text-white my-2 uppercase tracking-wide bg-pink-600 px-2 rounded-lg"
			>
				New
			</div>
			<p class="text-base mb-2">
				The effect of differences in meaning, varies through out the system of differences,
				therefore creating infinite variations of the structures of the subconscious.
			</p>
			<p class="text-base mb-4">
				To put it in other words, <c class="underline decoration-pink-500">
					the meanings vary through out the institutions, creating different variations of
					institutions, which also change the perception of time and the moment of conclusion.
				</c>
			</p>
			<p class="text-gray-400 text-xs">Last updated on November 14th</p>
			<Button
				href="/src/public/pdf/Understanding of Time in Psychoanalysis.pdf"
				download="Time in Psychoanalysis.pdf">Download PDF</Button
			>
		</PhylosophyCard2>

		<!-- CARD2 -->
		<PhylosophyCard2>
			<h5 class=" text-xl font-medium mb-2 text-gray-500">多媒体和广告音乐</h5>
			<h1 class="font-serif font-semibold text-center text-3xl ">Music in Multimedia</h1>
			<div
				class="w-fit font-medium text-sm text-white my-2 uppercase tracking-wide bg-teal-600 px-2 rounded-lg"
			>
				Major Work
			</div>
			<p class="text-base mb-2">
				This essay talks about how music works in
				<a class="underline decoration-sky-500">media and advertisements</a>
				Showcasing examples of music that is played across multiple continents and how people from different
				regions understand music in media differently.
			</p>

			<p class="text-gray-600 text-xs">Last updated on November 12th</p>
			<div>
				<Button
					href="/src/public/pdf/Daniil Fedorov - Production Portfolio - Reflective Critique.pdf"
					download="Reflective Critique.pdf"
				>
					Download PDF
				</Button>
				<Button
					href="https://feavel.notion.site/Music-in-Multimedia-Research-9c2cd5dd49b94adb9b93004f7739c449"
					target="_blank"
				>
					Read Citations
				</Button>
			</div>
		</PhylosophyCard2>

		<!-- CARD3s -->
		<PhylosophyCard2>
			<h5 class=" text-xl font-medium mb-2 text-gray-500">音乐中的哲学</h5>
			<h1 class="font-serif font-semibold text-center text-3xl ">Music Philosophy</h1>
			<div
				class="w-fit font-medium text-sm text-white my-2 uppercase tracking-wide bg-indigo-600 px-2 rounded-lg"
			>
				FCMA limited
			</div>
			<p class="text-base mb-2">
				This work talks about the ontology and epistimology of the music.
				<a class="underline decoration-sky-500">How people react to different sorts of music</a>
				Showcasing examples of music that is played across multiple continents and how people from different
				regions understand music in media differently.
			</p>

			<p class="text-gray-600 text-xs">Last updated on November 12th</p>
			<Button
				href="https://www.craft.do/s/3ThLjDJJ5vCFsF"
				target="blank"
				download="baby-feavel-home-1.gif"
			>
				Read Post
			</Button>
		</PhylosophyCard2>
	</div>
</div>
