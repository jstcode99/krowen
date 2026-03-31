<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import WhatsApp from '$lib/components/WhatsApp.svelte';
	import '$lib/styles/global.css';

	let { children } = $props();
</script>

<a href="#main-content" class="skip-link">Saltar al contenido</a>
<Navbar />
<div class="cursor" id="cursor"></div>
<div class="cursor-ring" id="cursorRing"></div>

{@render children()}
<Footer />
<WhatsApp phone="573001234567" />

<style>
	:root {
		--black: #0a0a0a;
		--white: #f0ede6;
		--accent: #c8ff00;
		--gray: #1a1a1a;
		--mid: #2a2a2a;
		--text-dim: #888;
	}

	:global(body) {
		/* applies to <body> */
		cursor: none;
	}

	:global(.cursor) {
		position: fixed;
		width: 12px;
		height: 12px;
		background: var(--accent);
		border-radius: 50%;
		pointer-events: none;
		z-index: 9999;
		transform: translate(-50%, -50%);
		transition:
			transform 0.1s,
			width 0.3s,
			height 0.3s;
		mix-blend-mode: normal;
	}
	:global(.cursor-ring) {
		position: fixed;
		width: 40px;
		height: 40px;
		border: 1px solid rgba(200, 255, 0, 0.5);
		border-radius: 50%;
		pointer-events: none;
		z-index: 9998;
		transform: translate(-50%, -50%);
		transition:
			transform 0.15s ease,
			width 0.3s,
			height 0.3s,
			opacity 0.3s;
	}
</style>
