<script>
	import InView from '../animations/inView/InView.svelte';
	import GridCard from './card/GridCard.svelte';
	const typewriter = (node, { speed = 1 } = {}) => {
		const text = node.textContent ?? '';
		const duration = text.length / (speed * 0.01);
		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	};
</script>

<div class="max-w-6xl md:px-4 flex flex-col content-center justify-center mx-auto">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:my-5 md:mx-4">
		<!-- PSYCHOANALYSIS  -->
		<a href="#philosophy-card" class="drop-shadow-2xl">
			<InView let:isVisible>
				<GridCard props="transition-colors {isVisible ? 'text-red-400' : ''} duration-500">
					<h1 class="md:text-3xl text-lg font-thin">Time in psychoanalysis</h1>
					<div class="">
						{#if isVisible}
							<p in:typewriter class="text-3xl font-black">精神分析試的時間研究</p>
						{/if}
						{#if isVisible}
							<p in:typewriter class="text-sm italic">
								A research on: perception of time in different languages,that is based
							</p>
						{/if}
						{#if isVisible}
							<p in:typewriter class="text-sm italic">
								on Lacanian psychoanalysis and geopolitics of the modern world.
							</p>
						{/if}
					</div>
				</GridCard>
			</InView>
		</a>

		<!-- FCMA  -->
		<a href="https://www.craft.do/s/3ThLjDJJ5vCFsF" target="blank" class="drop-shadow-2xl">
			<InView let:isVisible>
				<GridCard props="transition {isVisible ? 'text-sky-500' : ''} duration-500">
					<h1 class="md:text-3xl text-lg font-thin">FCMA</h1>
					<div class="">
						{#if isVisible}
							<p in:typewriter class="text-3xl font-black">影视与文化传媒协会</p>
						{/if}
						{#if isVisible}
							<p in:typewriter class="text-sm italic">
								Film and Culture Media Association is film club that is based in China
							</p>
						{/if}
						{#if isVisible}
							<p in:typewriter class="text-sm italic">teaches film making, music, and many more~</p>
						{/if}
					</div>
				</GridCard>
			</InView>
		</a>

		<!-- MUSIC  -->
		<a href="#music-card" class="drop-shadow-2xl">
			<InView let:isVisible>
				<GridCard props="transition {isVisible ? 'text-violet-400' : ''} duration-500">
					<h1 class="md:text-3xl text-lg font-thin">Music Production and Mixing</h1>
					<div class="">
						{#if isVisible}
							<p in:typewriter class="text-3xl font-black">音樂製作與後期處理</p>
						{/if}
						{#if isVisible}
							<p in:typewriter class="text-sm italic">
								Working part-time as a music producer and engineer.
							</p>
						{/if}
						{#if isVisible}
							<p in:typewriter class="text-sm italic">
								See below to learn more about my musical works
							</p>
						{/if}
					</div>
				</GridCard>
			</InView>
		</a>

		<!-- CODING -->
		<a href="#programing-card" class="drop-shadow-2xl">
			<InView let:isVisible>
				<GridCard props="transition {isVisible ? 'text-emerald-400' : ''} duration-500">
					<h1 class="md:text-3xl text-lg font-thin">Web Design and Programing</h1>
					<div class="">
						{#if isVisible}
							<p in:typewriter class="text-3xl font-black">網絡設計與編程</p>
						{/if}
						{#if isVisible}
							<p in:typewriter class="text-sm italic">
								Working part-time as a web designer and engineer.
							</p>
						{/if}
						{#if isVisible}
							<p in:typewriter class="text-sm italic">
								See below to learn more about my musical works
							</p>
						{/if}
					</div>
				</GridCard>
			</InView>
		</a>

		<!-- CONTACT -->
		<a href="#contact-card" class="drop-shadow-2xl">
			<InView let:isVisible>
				<GridCard props="transition {isVisible ? 'text-amber-400' : ''} duration-500">
					<h1 class="md:text-3xl text-lg font-thin">Good Friend</h1>
					<div class="">
						{#if isVisible}
							<p in:typewriter class="text-3xl font-black">友好的搭档</p>
						{/if}
						{#if isVisible}
							<p in:typewriter class="text-sm italic">
								Trustworthy and Polite, I see in people - light
							</p>
						{/if}
						{#if isVisible}
							<p in:typewriter class="text-sm italic">
								See below to learn more about my contact info
							</p>
						{/if}
					</div>
				</GridCard>
			</InView>
		</a>

		<!-- ABOUT -->
		<a href="#contact-card" class="drop-shadow-2xl">
			<InView let:isVisible>
				<GridCard props="transition {isVisible ? 'text-pink-400' : ''} duration-500">
					<h1 class="md:text-3xl text-lg font-thin">Freelance</h1>

					<div class="">
						{#if isVisible}
							<p in:typewriter class="text-3xl font-black">独立、自由</p>
						{/if}
						{#if isVisible}
							<p in:typewriter class="text-sm italic">
								Fine price of work, with space to negotiate.
							</p>
						{/if}
						{#if isVisible}
							<p in:typewriter class="text-sm italic">
								See below to learn more about my contact info
							</p>
						{/if}
					</div>
				</GridCard>
			</InView>
		</a>
	</div>
</div>
