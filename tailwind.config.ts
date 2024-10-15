import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],

	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
		},
	},
	mode: 'jit',
	plugins: [],
}
export default config
