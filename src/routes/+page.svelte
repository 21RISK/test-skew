<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';

	const version = '2.6';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		Version: {version}
	</h1>
	<form method="POST">
		<!-- <div>
			<label>
				Fisrt Name*
				<input name="name" type="text" />
			</label>
		</div>
		<hr />
		<div>
			<label>
				Second Name*
				<input name="surname" type="text" />
			</label>
		</div>
		<hr /> -->
		<div>
			<label>
				Email*
				<input name="email" type="text" />
			</label>
		</div>
		<hr />
		<div>
			<label>
				Age*:
				<input name="age" type="number" />
			</label>
		</div>
		<hr />
		<input type="hidden" name="version" value={version} />
		<button type="submit">Submit</button>
	</form>

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
