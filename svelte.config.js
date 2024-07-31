import vercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import * as child_process from 'node:child_process';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Use the Vercel adapter
		adapter: vercel(),
		version: {
			name: child_process.execSync('git rev-parse HEAD').toString().trim(),
			pollInterval: 30000
		}
	}
};

export default config;
