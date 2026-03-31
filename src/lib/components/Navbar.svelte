<script>
	import { page } from '$app/stores';
	let menuOpen = $state(false);
	let scrolled = $state(false);

	// Detect scroll on client side
	if (typeof window !== 'undefined') {
		window.addEventListener(
			'scroll',
			() => {
				scrolled = window.scrollY > 50;
			},
			{ passive: true }
		);
	}

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/servicios', label: 'Servicios' },
		{ href: '/proyectos', label: 'Proyectos' },
		{ href: '/contacto', label: 'Contacto' }
	];
</script>

<nav class:scrolled>
	<a href="/" class="nav-logo">Krowen</a>

	<ul class="nav-links">
		{#each links as link}
			<li>
				<a href={link.href} class:active={$page.url.pathname === link.href}>
					{link.label}
				</a>
			</li>
		{/each}
		<li>
			<a href="https://calendly.com/krowen/30min" target="_blank" class="nav-cta">
				Agenda tu asesoría
			</a>
		</li>
	</ul>

	<button class="hamburger" onclick={() => (menuOpen = !menuOpen)} aria-label="Menu">
		<span class:open={menuOpen}></span>
		<span class:open={menuOpen}></span>
		<span class:open={menuOpen}></span>
	</button>
</nav>

{#if menuOpen}
	<div class="mobile-menu">
		{#each links as link}
			<a href={link.href} onclick={() => (menuOpen = false)}>{link.label}</a>
		{/each}
		<a href="https://calendly.com/krowen/30min" target="_blank" class="mobile-cta">
			Agenda tu asesoría →
		</a>
	</div>
{/if}

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 200;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 24px 48px;
		background: linear-gradient(to bottom, rgba(10, 10, 10, 0.95) 0%, transparent 100%);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.04);
	}

	.nav-logo {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 28px;
		letter-spacing: 4px;
		color: var(--white);
		transition: color 0.3s;
	}
	.nav-logo:hover {
		color: var(--accent);
	}

	.nav-links {
		display: flex;
		gap: 36px;
		list-style: none;
		align-items: center;
	}
	.nav-links a {
		font-family: 'Space Mono', monospace;
		font-size: 11px;
		letter-spacing: 2px;
		color: var(--white);
		text-transform: uppercase;
		opacity: 0.55;
		transition: opacity 0.3s;
		position: relative;
	}
	.nav-links a::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		right: 0;
		height: 1px;
		background: var(--accent);
		transform: scaleX(0);
		transition: transform 0.3s;
	}
	.nav-links a:hover,
	.nav-links a.active {
		opacity: 1;
	}
	.nav-links a.active::after {
		transform: scaleX(1);
	}

	.nav-cta {
		background: var(--accent) !important;
		color: var(--black) !important;
		padding: 10px 20px;
		opacity: 1 !important;
		font-weight: 700;
	}
	.nav-cta:hover {
		transform: translate(-1px, -1px);
		box-shadow: 2px 2px 0 rgba(200, 255, 0, 0.3);
	}
	.nav-cta::after {
		display: none !important;
	}

	.hamburger {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 4px;
	}
	.hamburger span {
		display: block;
		width: 24px;
		height: 1px;
		background: var(--white);
		transition: all 0.3s;
	}
	.hamburger span.open:nth-child(1) {
		transform: rotate(45deg) translate(4px, 4px);
	}
	.hamburger span.open:nth-child(2) {
		opacity: 0;
	}
	.hamburger span.open:nth-child(3) {
		transform: rotate(-45deg) translate(4px, -4px);
	}

	.mobile-menu {
		position: fixed;
		inset: 0;
		z-index: 199;
		background: var(--black);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 40px;
	}
	.mobile-menu a {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 48px;
		letter-spacing: 4px;
		color: var(--white);
		transition: color 0.3s;
	}
	.mobile-menu a:hover {
		color: var(--accent);
	}
	.mobile-cta {
		font-family: 'Space Mono', monospace !important;
		font-size: 12px !important;
		color: var(--accent) !important;
		letter-spacing: 3px;
	}

	@media (max-width: 768px) {
		nav {
			padding: 20px 24px;
		}
		.nav-links {
			display: none;
		}
		.hamburger {
			display: flex;
		}
	}
</style>
