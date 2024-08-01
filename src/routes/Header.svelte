<script>
	import { page } from '$app/stores';
	import github from '$lib/images/github.svg';
	import { version } from '$app/environment';
	import { updated } from '$app/stores';
	import { writable } from 'svelte/store';
	import { beforeNavigate } from '$app/navigation';
	import { VERSION } from '$lib/version';

	$: console.log($updated);

	const clientVersion = VERSION;
	// @ts-ignore
	const buildDate = new Date(__BUILD_DATE__).toLocaleString();
	const enableRedirection = writable(false);

	$: beforeNavigate(({ willUnload, to }) => {
		// Only execute if redirection is enabled
		if ($enableRedirection && $updated && !willUnload && to?.url) {
			location.href = to.url.href;
		}
	});
</script>

<header>
	<div class="">
		<div>ver.{clientVersion}</div>
		<div style="font-size: 0.8em">{version}</div>
		<span style="font-size: 0.8em">Updated: {$updated.toString()}</span>
		<div style="font-size: 0.8em">Build Date: {buildDate}</div>
		<label>
			<input type="checkbox" bind:checked={$enableRedirection} />
			Enable Redirection
		</label>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/static-prerendered' ? 'page' : undefined}>
				<a href="/static-prerendered">static prerendered page</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/page-server-ts') ? 'page' : undefined}>
				<a href="/page-server-ts">+page.server.ts</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/page-ts') ? 'page' : undefined}>
				<a href="/page-ts">+page.ts</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/form-actions') ? 'page' : undefined}>
				<a href="/form-actions">form-actions</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/form-enhanced') ? 'page' : undefined}>
				<a href="/form-enhanced">form-actions-enhanced</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
