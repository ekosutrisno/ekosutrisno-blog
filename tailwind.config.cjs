/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'green-0': '#00AAA1',
				'green-1': '#F2F8F7',
				'dark-0': '#222222',
				'dark-1': '#1E1E1E',
				'dark-2': '#333333',
				'gray-1': '#F1F1F1',
				'gray-2': '#E8F3F3'
			}
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
