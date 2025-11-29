// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			// Explicitly tell the adapter to create a file named 404.html
			// It will still contain your main app shell content.
			fallback: '404.html', // <-- CHANGE THIS LINE
			precompress: false,
			strict: true
		}),
		paths: {
			base: '',
		}
	}
};

export default config;