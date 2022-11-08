<div class="flex my-3">
	<h1 class="typewriter font-mono font-thin dark:after:bg-slate-700 after:bg-zinc-200 ">
		<slot />
	</h1>
</div>

<style>
	.typewriter {
		position: relative;
		/* font-family: 'Incosolata', Consolas, monospace; */
		/* font-size: 13px; */
	}
	.typewriter::after {
		content: '|';
		position: absolute;
		right: 0;
		color: white;
		/* background-color: rgb(51 65 85); */
		width: 100%;
		animation: typing 3s steps(36) alternate infinite, line 1s infinite;
	}
	@keyframes typing {
		to {
			width: 0%;
		}
	}
	@keyframes line {
		50% {
			color: transparent;
		}
	}
</style>
