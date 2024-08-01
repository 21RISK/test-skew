import vercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// import { VERSION } from './src/lib/version';
import { VERSION } from './src/lib/version.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Use the Vercel adapter
		adapter: vercel(),
		version: {
			name: VERSION,
			pollInterval: 30000
		}
	}
};

export default config;
