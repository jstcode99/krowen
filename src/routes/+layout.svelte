<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import WhatsApp from '$lib/components/WhatsApp.svelte';
	import Cursor from '$lib/components/Cursor.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import '$lib/styles/global.css';
	import '$lib/styles/layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/svg" href="/favicons/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
	<link rel="android-chrome" sizes="192x192" href="/favicons/android-chrome-192x192.png" />
	<link rel="android-chrome" sizes="512x512" href="/favicons/android-chrome-512x512.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />

	<!-- facebook -->
	<meta name="facebook:card" content="summary_large_image" />
	<meta name="facebook:title" content="Proyectos y Portafolio de Software — Krowen" />
	<meta
		name="facebook:description"
		content="Portafolio de Krowen: apps móviles, sistemas web, chatbots, UI/UX y soluciones digitales para pymes, startups y CEOs en Colombia. Proyectos innovadores y resultados medibles."
	/>
	<meta name="facebook:image" content="https://krowen.lat/krowen.webp" />
	<!-- linkedin -->
	<meta name="linkedin:card" content="summary_large_image" />
	<meta
		name="linkedin:title"
		content="Krowen — Agencia de software y soluciones digitales para pymes y startups en Colombia"
	/>
	<meta
		name="linkedin:description"
		content="Portafolio de Krowen: apps móviles, sistemas web, chatbots, UI/UX y soluciones digitales para pymes, startups y CEOs en Colombia. Proyectos innovadores y resultados medibles."
	/>
	<meta name="linkedin:image" content="https://krowen.lat/krowen.webp" />

	<!-- Instagram -->
	<meta name="instagram:card" content="summary_large_image" />
	<meta
		name="instagram:title"
		content="Krowen — Agencia de software y soluciones digitales para pymes y startups en Colombia"
	/>
	<meta
		name="instagram:description"
		content="Portafolio de Krowen: apps móviles, sistemas web, chatbots, UI/UX y soluciones digitales para pymes, startups y CEOs en Colombia. Proyectos innovadores y resultados medibles."
	/>
	<meta name="instagram:image" content="https://krowen.lat/krowen.webp" />
	<meta name="instagram:site" content="@krowen.lat" />
</svelte:head>
<Navbar />
<Cursor />
<Reveal />
<div class="cursor" id="cursor"></div>
<div class="cursor-ring" id="cursor-ring"></div>

{@render children()}
<Footer />
<WhatsApp phone="573142115239" />

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
		cursor: pointer;
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
