/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			transitionDuration: {
				0: '0ms',
				2000: '2000ms'
			}
		}
	},
	darkMode: 'class',
	plugins: []
};
