/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
	safelist: [
		'text-red-500', // clases específicas
		/^bg-/, // regex para múltiples clases
	  ],
}
