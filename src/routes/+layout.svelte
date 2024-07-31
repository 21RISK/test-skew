<script>
	import Header from './Header.svelte';
	import '../app.css';
	import { setContext } from 'svelte';
	import { onMount } from 'svelte';
	import { updated } from '../stores/version';

	/**
	 * @type {boolean}
	 */
	let updatedValue;

	const unsubscribe = updated.subscribe((value) => {
		updatedValue = value;
	});

	onMount(() => {
		const interval = setInterval(() => {
			console.log('updatedValue:', updatedValue);
		}, 10000);

		return () => {
			clearInterval(interval);
			unsubscribe();
		};
	});

	setContext('version', '2.9.5');
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
