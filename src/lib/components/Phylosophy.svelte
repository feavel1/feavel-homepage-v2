<script>
	import PhylosophyCard from './card/PhylosophyCard.svelte';
</script>

<!-- svelte-ignore a11y-missing-attribute -->

<div class="md:mt-24 mt-4">
	<div class="grid grid-cols-1 sm:grid-cols-2 place-content-center gap-3 ">
		<PhylosophyCard title="Time in Psychoanalysis" text="精神分析中的时间" classes="">
			<p class="text-sm indent-8 font-extralight italic">
				If we use the structuralist understanding of language and the theory of perception of
				logical time, my argument is:<c class="underline decoration-sky-500 decoration-dotted">
					The effect of differences in meaning, varies throughout the system of differences,
					therefore creating infinite variations of the structures of the subconscious.
				</c>
			</p>
			<p class="text-sm indent-8 font-extralight italic">
				To put it in other words,<c class="underline decoration-pink-500">
					the meanings vary through the institutions, creating different variations of institutions,
					which also change the perception of time.
				</c>
			</p>
		</PhylosophyCard>
		<PhylosophyCard title="Music in Multimedia" text="多媒体和广告音乐" classes="">
			<div class="">
				<p class="text-sm indent-8 font-extralight italic">
					This essay talks about how music works in
					<a class="underline decoration-sky-500">media and advertisements</a>
					Showcasing examples of music that is played across multiple continents and how people from
					different regions understand music in media differently.
				</p>
			</div>
		</PhylosophyCard>
	</div>
</div>
