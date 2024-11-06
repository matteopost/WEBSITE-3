/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': 'Oracle'
			}
		},

	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {

				".no-scrollbar::-webkit-scrollbar": {
					display: "none",
				},

				".no-scrollbar": {
					"-ms-overflow-style": "none", 
					"scrollbar-width": "none", 

				},
			};
			addUtilities(newUtilities);
		},
	],
}
