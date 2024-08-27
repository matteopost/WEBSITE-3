/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': 'Oracle',
				'slab': 'Durk',
			},
			colors: {
				'blu': '#0000FF',
			},
			lineHeight: {
				'negative': '0.94',
			},
		},
	},
	plugins: [],
}
