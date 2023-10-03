/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				systemui: ['system-ui', 'sans-serif'],
			},
			boxShadow: {
				'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.7)',
				'4xl': '1rem 1rem 2rem 0rem rgba(0, 0, 0, 0.4)',
			  }
		},
	},
	plugins: [],
}
