<script lang="ts">
	import type { ActionData } from './$types';
	import { getContext } from 'svelte';

	const version = getContext('version');
</script>

<svelte:head>
	<title>Form actions</title>
	<meta name="description" content="A Wordle clone written in SvelteKit" />
</svelte:head>

<h1><b>+page.server.ts</b></h1>

<form method="POST" action="?/submit">
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
