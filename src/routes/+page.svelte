<script>
	import Counter from './Counter.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	function changeQueryParam() {
		const url = new URL($page.url);
		url.searchParams.set('testParam', 'true');
		goto(url.toString());
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1><b>+page.ts</b></h1>

	<button on:click={changeQueryParam}> Set Query Param </button>

	<!-- Display the current query parameters -->
	<p>Current Query Param: {$page.url.searchParams.get('testParam')}</p>
	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
