import { writable } from 'svelte/store';

export const updated = writable(false);

if (import.meta.hot) {
	import.meta.hot.on('vite:beforeUpdate', () => {
		updated.set(true);
	});
}
