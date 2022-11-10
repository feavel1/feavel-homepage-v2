<script>
	import { onMount } from 'svelte';
	import Icon from 'svelte-awesome';
	import heart from 'svelte-awesome/icons/heart';
	import handshakeO from 'svelte-awesome/icons/handshakeO';
	import fileAudioO from 'svelte-awesome/icons/fileAudioO';
	import tags from 'svelte-awesome/icons/tags';
	import book from 'svelte-awesome/icons/book';
	import assistiveListeningSystems from 'svelte-awesome/icons/assistiveListeningSystems';
	import SomeText from './card/SomeText.svelte';

	onMount(() => {
		document.getElementById('cards').onmousemove = (e) => {
			for (const card of document.getElementsByClassName('card')) {
				const rect = card.getBoundingClientRect(),
					x = e.clientX - rect.left,
					y = e.clientY - rect.top;
				card.style.setProperty('--mouse-x', `${x}px`);
				card.style.setProperty('--mouse-y', `${y}px`);
			}
		};
	});
</script>

<main class="h-auto text-black dark:text-white mt-12 font-sans ">
	<div id="cards" class="text-xl">
		<div class="card">
			<div class="card-content">
				<div class="card-image">
					<Icon data={heart} scale={5} class="stroke-cyan-500 fill-blue-500 stroke-6 opacity-50" />
				</div>
				<div class="card-info-wrapper">
					<div class="card-info">
						<Icon data={heart} class="" />
						<div class="card-info-title">
							<h3>Latest Album</h3>
							<SomeText>最新音乐</SomeText>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="card">
			<div class="card-content">
				<div class="card-image">
					<Icon data={handshakeO} scale={5} class=" opacity-50" />
				</div>
				<div class="card-info-wrapper">
					<div class="card-info">
						<Icon data={handshakeO} />
						<div class="card-info-title">
							<h3>Colaboration Album</h3>
							<SomeText>合作专辑</SomeText>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="card">
			<div class="card-content">
				<div class="card-image ">
					<Icon data={fileAudioO} scale={5} class="opacity-50" />
				</div>
				<div class="card-info-wrapper">
					<div class="card-info">
						<Icon data={fileAudioO} />
						<div class="card-info-title">
							<h3>Mixed Project</h3>
							<SomeText>混音作品</SomeText>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="card">
			<div class="card-content">
				<div class="card-image">
					<Icon data={tags} scale={5} class=" opacity-50" />
				</div>
				<div class="card-info-wrapper">
					<div class="card-info">
						<Icon data={tags} />
						<div class="card-info-title">
							<h3>Music in Adverts</h3>
							<SomeText>广告配乐</SomeText>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="card">
			<div class="card-content">
				<div class="card-image">
					<Icon data={book} scale={5} class="opacity-50" />
				</div>
				<div class="card-info-wrapper">
					<div class="card-info">
						<Icon data={book} />
						<div class="card-info-title">
							<h3>Music Tutorial</h3>
							<SomeText>音乐教程</SomeText>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="card">
			<div class="card-content">
				<div class="card-image">
					<Icon data={assistiveListeningSystems} scale={5} class="opacity-50" />
				</div>
				<div class="card-info-wrapper">
					<div class="card-info">
						<Icon data={assistiveListeningSystems} />
						<div class="card-info-title">
							<h3>My Playlist</h3>
							<SomeText>最近歌单</SomeText>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	:root {
		--card-color: #44403c;
	}

	main {
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	#cards {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		max-width: 916px;
		width: calc(100% - 20px);
	}

	#cards:hover > .card::after {
		opacity: 1;
	}

	.card {
		display: flex;
		flex-direction: column;
		position: relative;
		background-color: rgb(255, 255, 255);
		border-radius: 5px;
		cursor: pointer;
		height: 300px;
		width: 300px;
	}

	.card:hover::before {
		opacity: 1;
	}

	.card::before,
	.card::after {
		border-radius: inherit;
		content: '';
		height: 100%;
		left: 0px;
		opacity: 0;
		position: absolute;
		top: 0px;
		transition: opacity 500ms;
		width: 100%;
	}

	.card::before {
		background: radial-gradient(
			800px circle at var(--mouse-x) var(--mouse-y),
			rgba(209, 213, 219, 0.253),
			transparent 40%
		);
		z-index: 3;
	}

	.card::after {
		background: radial-gradient(
			600px circle at var(--mouse-x) var(--mouse-y),
			#d324e3,
			transparent 40%
		);
		z-index: 1;
	}

	.card > .card-content {
		background-color: var(--card-color);
		border-radius: inherit;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		inset: 1px;
		padding: 1px;
		position: absolute;
		z-index: 2;
	}

	/* -- ↓ ↓ ↓ extra card content styles ↓ ↓ ↓ -- */

	h3 {
		font-size: 1px;
		margin: 0px;
	}

	.card-image {
		align-items: center;
		display: flex;
		height: 140px;
		justify-content: center;
		overflow: hidden;
	}

	/* .card-image > i {
		font-size: 6em;
		opacity: 0.25;
	} */

	.card-info-wrapper {
		align-items: center;
		display: flex;
		flex-grow: 1;
		justify-content: flex-start;
		padding: 30px 0px 0px 20px;
	}

	.card-info {
		align-items: flex-start;
		display: flex;
		gap: 10px;
	}

	/* .card-info > i {
		font-size: 1em;
		height: 20px;
		line-height: 20px;
	} */

	.card-info-title > h3 {
		font-size: 1.1em;
		line-height: 15px;
	}

	/* .card-info-title > h4 {
		color: rgba(255, 255, 255, 0.6);
		font-size: 0.85em;
		margin-top: 8px;
	} */

	/* -- ↓ ↓ ↓ some responsiveness ↓ ↓ ↓ -- */

	@media (max-width: 1000px) {
		main {
			align-items: flex-start;
			overflow: auto;
		}

		#cards {
			max-width: 1000px;
			padding: 10px 0px;
		}

		.card {
			flex-shrink: 1;
			width: calc(50% - 4px);
		}
	}

	@media (max-width: 500px) {
		.card {
			height: 180px;
		}

		.card-image {
			height: 80px;
			margin-top: 20px;
		}

		/* .card-image > i {
			font-size: 3em;
		} */

		.card-info-wrapper {
			padding: 0px 10px;
		}

		/* .card-info > i {
			font-size: 0.8em;
		} */

		.card-info-title > h3 {
			font-size: 0.9em;
		}

		/* .card-info-title > h4 {
			font-size: 0.8em;
			margin-top: 4px;
		} */
	}

	@media (max-width: 500px) {
		.card {
			width: 100%;
		}
	}
</style>
