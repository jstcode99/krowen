<script lang="ts">
	import { onMount } from 'svelte';
	import Counter from '$lib/components/Counter.svelte';
	import { fade } from 'svelte/transition';

	let scrollY = 0;
	let mounted = $state(false);
	type Testimonial = {
		quote: string;
		name: string;
		role: string;
		initial: string;
	};
	let activeTestimonial = $state(0);

	const testimonials: Testimonial[] = [
		{
			quote:
				'Krowen transformó nuestra idea en una aplicación real en tiempo récord. El equipo entiende lo que quieres antes de que termines de explicarlo.',
			name: 'Andrés Morales',
			role: 'CEO, ReferisCO',
			initial: 'A'
		},
		{
			quote:
				'El sistema de turnos que nos desarrollaron redujo nuestros tiempos de espera en un 60%. Solución limpia, rápida y escalable.',
			name: 'Carolina Ruiz',
			role: 'Directora Operativa, Clínica Horizonte',
			initial: 'C'
		},
		{
			quote:
				'Profesionalismo desde el primer día. Entregaron el sitio web antes de lo acordado y superó todas nuestras expectativas de diseño.',
			name: 'Felipe Gómez',
			role: 'Fundador, Agencia Nómada',
			initial: 'F'
		},
		{
			quote:
				'El chatbot de ventas que implementaron aumentó nuestras conversiones un 40%. Totalmente recomendados para cualquier proyecto digital.',
			name: 'Luisa Vargas',
			role: 'Marketing Manager, TiendaFlex',
			initial: 'L'
		}
	];

	type Project = {
		name: string;
		category: string;
		desc: string;
		tag: string;
		year: string;
		color: string;
	};

	const projects: Project[] = [
		{
			name: 'ReferisCO',
			category: 'App Móvil',
			desc: 'Plataforma de referidos con sistema de recompensas en tiempo real.',
			tag: 'React Native · Node.js',
			year: '2024',
			color: '#c8ff00'
		},
		{
			name: 'Partner App',
			category: 'Mensajería',
			desc: 'App de mensajería instantánea para equipos de trabajo distribuidos.',
			tag: 'Flutter · Firebase',
			year: '2024',
			color: '#ff6b35'
		},
		{
			name: 'TurnoExpress',
			category: 'Sistema de Gestión',
			desc: 'Sistema de turnos y reservas para clínicas y consultorios.',
			tag: 'SvelteKit · PostgreSQL',
			year: '2023',
			color: '#00d4ff'
		},
		{
			name: 'NómadaShop',
			category: 'E-commerce',
			desc: 'Tienda en línea con carrito, pagos PSE y gestión de inventario.',
			tag: 'Next.js · Stripe',
			year: '2023',
			color: '#ff3d9a'
		},
		{
			name: 'KrowBot',
			category: 'IA & Chatbot',
			desc: 'Asistente virtual con IA para soporte y ventas automatizadas.',
			tag: 'OpenAI · Python · WhatsApp API',
			year: '2024',
			color: '#a78bfa'
		}
	];

	const services = [
		{
			num: '01',
			name: 'Desarrollo Web',
			desc: 'Sitios y aplicaciones web de alta calidad, diseñadas para convertir visitantes en clientes.'
		},
		{
			num: '02',
			name: 'Apps Móviles',
			desc: 'Aplicaciones nativas y multiplataforma. iOS, Android y todo en uno.'
		},
		{
			num: '03',
			name: 'UI & UX Design',
			desc: 'Interfaces centradas en el usuario. Wireframes, prototipos y diseño visual.'
		},
		{
			num: '04',
			name: 'Chatbots & IA',
			desc: 'Automatización inteligente: asistentes virtuales y bots de ventas 24/7.'
		},
		{
			num: '05',
			name: 'Sistemas a Medida',
			desc: 'Software personalizado para tus procesos empresariales específicos.'
		},
		{
			num: '06',
			name: 'Consultoría Digital',
			desc: 'Te acompañamos desde la idea hasta el lanzamiento.'
		}
	];

	const parallaxLayers = [
		{ class: 'float-circle-1', speed: 0.28 },
		{ class: 'float-circle-2', speed: 0.4 },
		{ class: 'float-box-1', speed: 0.45, rotate: 15 },
		{ class: 'float-box-2', speed: 0.6, rotate: -20 },
		{ class: 'float-box-3', speed: 0.22, rotate: 5 },
		{ class: 'float-line-v', speed: 0.35 },
		{ class: 'float-line-h', speed: 0.55 }
	];

	function getTranslate(speed: number) {
		return `translateY(${scrollY * speed}px)`;
	}

	function getTransform(speed: number, rotate = 0) {
		return `translateY(${scrollY * speed}px) rotate(${rotate}deg)`;
	}

	const marqueeItems = [
		'Apps Móviles',
		'Sitios Web',
		'UI & UX',
		'Chatbots',
		'Sistemas a Medida',
		'Prototipos',
		'E-commerce',
		'Consultoría Digital'
	];
	onMount(() => {
		mounted = true;

		const hero = document.querySelector('.hero-content') as HTMLElement | null;

		if (hero) {
			hero.style.opacity = '0';
			hero.style.transform = 'translateY(30px)';

			setTimeout(() => {
				hero.style.transition = 'opacity 1s ease, transform 1s ease';
				hero.style.opacity = '1';
				hero.style.transform = 'translateY(0)';
			}, 300);
		}

		const layers = document.querySelectorAll(
			'.float-circle-1, .float-circle-2, .float-box-1, .float-box-2, .float-box-3, .float-line-v, .float-line-h'
		);

		layers.forEach((layer, i) => {
			const el = layer as HTMLElement;
			el.style.opacity = '0';
			el.style.transition = `opacity 1s ease ${i * 0.06}s`;

			setTimeout(() => {
				el.style.opacity = '1';
			}, 100);
		});
	});
</script>

<svelte:head>
	<title>Krowen — Agencia de software y soluciones digitales en Colombia</title>
	<meta
		name="description"
		content="Krowen es una agencia de software, marketing digital y soluciones tecnológicas de vanguardia en Colombia. Diseñamos apps móviles, desarrollo web a medida, chatbots, sistemas empresariales e implementamos SEO técnico, estrategias digitales data‑driven y transformación digital para pymes, startups y CEOs que buscan crecimiento orgánico, conversión y ROI real."
	/>
	<meta
		name="keywords"
		content="agencia de software, desarrollo de software a medida, desarrollo web y mobile, apps móviles, soluciones digitales, SEO técnico, SEO local, marketing digital, pymes Colombia, startups Colombia, estrategias data‑driven, transformación digital, innovación tecnológica, inteligencia artificial, chatbots para negocios, crecimiento orgánico, tráfico cualificado, conversión web, ROI digital, consultoría tecnológica, diseño UX/UI, consultoría para CEOs"
	/>

	<!-- Open Graph / Facebook -->
	<meta
		property="og:title"
		content="Krowen — Agencia de software y soluciones digitales en Colombia"
	/>
	<meta
		property="og:description"
		content="Somos una agencia de software y soluciones digitales en Colombia: apps móviles, web, chatbots, SEO técnico, estrategias data‑driven y transformación digital para pymes, startups y CEOs que buscan crecimiento orgánico y resultados reales."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://krowen.lat/" />
	<meta property="og:image" content="https://krowen.lat/krowen.webp" />
</svelte:head>

<!-- ═══════ HERO ═══════ -->
<section class="hero" id="hero">
	<div class="scene">
		<div class="bg-grid"></div>
		<div class="p-layer float-k" data-speed="0.15">K</div>
		{#each parallaxLayers as layer}
			<div
				class={layer.class}
				style="transform: {getTransform(layer.speed, layer.rotate ?? 0)}"
			></div>
		{/each}
		<div class="float-line-v" style="transform: {getTranslate(0.35)}"></div>
		<div class="float-line-h" style="transform: {getTranslate(0.55)}"></div>
		<div class="float-tag" style="transform: rotate(-90deg) translateX(-50%) {getTranslate(0.65)}">
			Software · Design · Innovation
		</div>
		<div class="float-tag2" style="transform: {getTranslate(0.38)}">Colombia · 2023</div>
		<div class="float-dots" style="transform: {getTranslate(0.5)}">
			{#each Array(15) as _}<span></span>{/each}
		</div>
		<!-- Crow SVG -->
		<svg
			class="float-crow"
			style="transform: {getTranslate(0.25)}"
			viewBox="0 0 200 160"
			fill="white"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M80 140 L70 155 L60 155 L65 140 L50 135 L30 138 L20 130 L35 125 L15 115 L25 108 L45 112 L40 95 L55 100 L60 85 L75 95 L78 80 L90 90 L95 75 L105 88 L115 70 L120 85 L130 72 L128 90 L145 78 L140 95 L160 88 L150 105 L165 100 L155 118 L140 112 L135 128 L120 122 L115 140 L100 135 L95 148 L85 142 Z"
			/>
			<path d="M162 85 L175 78 L185 82 L178 90 L165 88 Z" />
			<circle cx="108" cy="84" r="4" />
		</svg>
	</div>

	<div class="hero-content" class:mounted>
		<div class="hero-eyebrow">Desde la idea hasta la implementación</div>
		<h1 class="hero-title">Desarrolla<br />tus <span class="ac">ideas</span><br />con nosotros.</h1>
		<p class="hero-sub">
			Creamos productos digitales que resuelven problemas y generan impacto. Tecnologías modernas,
			metodologías ágiles.
		</p>
		<div class="hero-actions">
			<a href="/contacto" class="btn-primary">Contactar ahora</a>
			<a href="/proyectos" class="btn-ghost">Ver proyectos</a>
		</div>
	</div>
</section>

<!-- ═══════ MARQUEE ═══════ -->
<div class="marquee-wrap">
	<div class="marquee-track">
		{#each [...marqueeItems, ...marqueeItems] as item}
			<div class="marquee-item"><span class="dot"></span>{item}</div>
		{/each}
	</div>
</div>

<!-- ═══════ SERVICES ═══════ -->
<section class="section" id="servicios">
	<div class="section-label reveal">Qué ofrecemos</div>
	<h2 class="section-title reveal reveal-d1">Nuestros<br />Servicios</h2>
	<div class="services-grid">
		{#each services as s, i}
			<div class="service-card reveal reveal-d{(i % 3) + 1}">
				<div class="service-num">{s.num}</div>
				<div class="service-name">{s.name}</div>
				<p class="service-desc">{s.desc}</p>
				<a href="/servicios" class="service-link">Ver más →</a>
			</div>
		{/each}
	</div>
</section>

<!-- ═══════ RECENT PROJECTS ═══════ -->
<section class="section projects-section" id="proyectos">
	<div class="section-label reveal">Lo que construimos</div>
	<div class="projects-header">
		<h2 class="section-title reveal reveal-d1">Proyectos<br />Recientes</h2>
		<a href="/proyectos" class="btn-ghost reveal reveal-d2">Ver todos</a>
	</div>
	<div class="projects-list">
		{#each projects as p, i}
			<a href="/proyectos" class="project-row reveal">
				<div class="pr-left">
					<span class="pr-num">0{i + 1}</span>
					<div>
						<div class="pr-name">{p.name}</div>
						<div class="pr-desc">{p.desc}</div>
					</div>
				</div>
				<div class="pr-right">
					<div class="pr-tag">{p.tag}</div>
					<div class="pr-cat" style="color: {p.color}">{p.category}</div>
					<div class="pr-year">{p.year}</div>
				</div>
				<div class="pr-arrow">→</div>
				<div class="pr-accent-line" style="background: {p.color}"></div>
			</a>
		{/each}
	</div>
</section>

<!-- ═══════ STATS PARALLAX ═══════ -->
<div class="stats-section">
	<div class="stats-left">
		<div class="section-label reveal">Por qué Krowen</div>
		<h2 class="section-title reveal reveal-d1" style="margin-bottom:40px">
			Números<br />que hablan
		</h2>
		{#each [['50', 'Proyectos entregados', '+'], ['100', 'Clientes satisfechos', '%'], ['5', 'Años de experiencia', '+'], ['24', 'Soporte disponible', 'h']] as [num, label, suffix], i}
			<div class="stat reveal reveal-d{i + 1}">
				<div class="stat-num"><Counter value={parseInt(num)} {suffix} /></div>
				<div class="stat-label">{label}</div>
			</div>
		{/each}
	</div>
	<div class="stats-right">
		<div class="stats-big-k" style="transform: translateY({scrollY * 0.05}px)">K</div>
		<div class="stats-badge">
			<div class="badge-line">Villavicencio, CO</div>
			<div class="badge-line">2023 →</div>
		</div>
	</div>
</div>

<!-- ═══════ TESTIMONIALS ═══════ -->
<section class="section testimonials-section">
	<div class="section-label reveal">Lo que dicen</div>
	<h2 class="section-title reveal reveal-d1">Testimonios</h2>

	<div class="testi-container reveal reveal-d2" in:fade out:fade>
		<div class="testi-main">
			<div class="quote-mark">"</div>
			<blockquote class="testi-quote">
				{testimonials[activeTestimonial].quote}
			</blockquote>
			<div class="testi-author">
				<div class="testi-avatar">{testimonials[activeTestimonial].initial}</div>
				<div>
					<div class="testi-name">{testimonials[activeTestimonial].name}</div>
					<div class="testi-role">{testimonials[activeTestimonial].role}</div>
				</div>
			</div>
		</div>

		<div class="testi-sidebar">
			{#each testimonials as t, i}
				<button
					class="testi-thumb"
					class:active={i === activeTestimonial}
					onclick={() => (activeTestimonial = i)}
				>
					<div class="thumb-avatar">{t.initial}</div>
					<div class="thumb-info">
						<div class="thumb-name">{t.name}</div>
						<div class="thumb-role">{t.role}</div>
					</div>
				</button>
			{/each}
		</div>
	</div>

	<div class="testi-dots">
		{#each testimonials as _, i}
			<button
				class="testi-dot"
				aria-label="Testimonio {i + 1}"
				class:active={i === activeTestimonial}
				onclick={() => (activeTestimonial = i)}
			></button>
		{/each}
	</div>
</section>

<!-- ═══════ CTA ═══════ -->
<section class="cta-section">
	<div class="cta-content reveal">
		<div class="section-label" style="color:var(--black)">
			<span style="background:var(--black);width:24px;height:1px;display:inline-block"></span>
			Trabajemos juntos
		</div>
		<h2 class="cta-title">¿Tienes una idea?<br />Hablemos.</h2>
		<div class="cta-actions">
			<a href="/contacto" class="cta-btn-primary">Contáctanos ahora</a>
			<a href="https://calendly.com/krowen/30min" target="_blank" class="cta-btn-ghost"
				>Agenda una llamada →</a
			>
		</div>
	</div>
</section>

<style>
	/* ─── HERO ─── */
	.hero {
		position: relative;
		height: 100vh;
		min-height: 700px;
		display: flex;
		align-items: flex-end;
		padding: 0 48px 80px;
		overflow: hidden;
	}

	.scene {
		position: absolute;
		inset: 0;
		overflow: hidden;
	}

	.bg-grid {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(rgba(200, 255, 0, 0.03) 1px, transparent 1px),
			linear-gradient(90deg, rgba(200, 255, 0, 0.03) 1px, transparent 1px);
		background-size: 64px 64px;
	}

	/* Parallax layers */
	.float-k {
		position: absolute;
		top: -15%;
		right: -8%;
		font-family: 'Bebas Neue', sans-serif;
		font-size: 58vw;
		line-height: 1;
		color: var(--white);
		opacity: 0.04;
		user-select: none;
		pointer-events: none;
		will-change: transform;
	}
	.float-circle-1 {
		position: absolute;
		width: 500px;
		height: 500px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(200, 255, 0, 0.12) 0%, transparent 70%);
		top: 8%;
		right: 12%;
		will-change: transform;
	}
	.float-circle-2 {
		position: absolute;
		width: 300px;
		height: 300px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(200, 255, 0, 0.07) 0%, transparent 70%);
		bottom: 25%;
		left: 8%;
		will-change: transform;
	}
	.float-box-1 {
		position: absolute;
		width: 120px;
		height: 120px;
		border: 1px solid rgba(200, 255, 0, 0.15);
		top: 18%;
		right: 28%;
		will-change: transform;
	}
	.float-box-2 {
		position: absolute;
		width: 55px;
		height: 55px;
		border: 1px solid rgba(200, 255, 0, 0.22);
		top: 42%;
		left: 18%;
		will-change: transform;
	}
	.float-box-3 {
		position: absolute;
		width: 200px;
		height: 200px;
		border: 1px solid rgba(200, 255, 0, 0.07);
		bottom: 12%;
		right: 8%;
		will-change: transform;
	}
	.float-line-v {
		position: absolute;
		width: 1px;
		height: 180px;
		background: linear-gradient(to bottom, transparent, rgba(200, 255, 0, 0.3), transparent);
		top: 28%;
		left: 43%;
		will-change: transform;
	}
	.float-line-h {
		position: absolute;
		width: 140px;
		height: 1px;
		background: linear-gradient(to right, transparent, rgba(200, 255, 0, 0.2), transparent);
		top: 62%;
		right: 18%;
		will-change: transform;
	}
	.float-tag {
		position: absolute;
		font-family: 'Space Mono', monospace;
		font-size: 10px;
		letter-spacing: 3px;
		color: var(--accent);
		opacity: 0.45;
		text-transform: uppercase;
		top: 25%;
		left: 14%;
		transform-origin: left center;
		white-space: nowrap;
		will-change: transform;
	}
	.float-tag2 {
		position: absolute;
		font-family: 'Space Mono', monospace;
		font-size: 10px;
		letter-spacing: 3px;
		color: var(--white);
		opacity: 0.15;
		top: 68%;
		right: 32%;
		white-space: nowrap;
		will-change: transform;
	}
	.float-dots {
		position: absolute;
		top: 52%;
		right: 22%;
		display: grid;
		grid-template-columns: repeat(5, 8px);
		gap: 12px;
		will-change: transform;
	}
	.float-dots span {
		width: 4px;
		height: px;
		border-radius: 50%;
		background: var(--accent);
		opacity: 0.4;
		display: block;
	}
	.float-crow {
		position: absolute;
		bottom: 12%;
		right: 18%;
		width: 170px;
		opacity: 0.12;
		will-change: transform;
	}

	/* Hero content */
	.hero-content {
		position: relative;
		z-index: 10;
		max-width: 960px;
		opacity: 0;
		transform: translateY(30px);
		transition:
			opacity 1s ease 0.3s,
			transform 1s ease 0.3s;
	}
	.hero-content.mounted {
		opacity: 1;
		transform: translateY(0);
	}

	.hero-eyebrow {
		font-family: 'Space Mono', monospace;
		font-size: 11px;
		letter-spacing: 4px;
		color: var(--accent);
		text-transform: uppercase;
		margin-bottom: 24px;
		display: flex;
		align-items: center;
		gap: 16px;
	}
	.hero-eyebrow::before {
		content: '';
		width: 40px;
		height: 1px;
		background: var(--accent);
	}

	.hero-title {
		font-family: 'Bebas Neue', sans-serif;
		font-size: clamp(72px, 10vw, 160px);
		line-height: 0.92;
		color: var(--white);
		margin-bottom: 40px;
	}
	.ac {
		color: var(--accent);
	}

	.hero-sub {
		font-size: 16px;
		color: var(--text-dim);
		max-width: 480px;
		line-height: 1.8;
		margin-bottom: 48px;
	}

	.hero-actions {
		display: flex;
		gap: 24px;
		align-items: center;
	}

	.scroll-indicator {
		position: absolute;
		bottom: 40px;
		right: 48px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		z-index: 10;
	}
	.scroll-line {
		width: 1px;
		height: 60px;
		background: linear-gradient(to bottom, var(--accent), transparent);
		animation: spulse 2s ease-in-out infinite;
	}
	@keyframes spulse {
		0%,
		100% {
			opacity: 0.3;
			transform: scaleY(0.7);
		}
		50% {
			opacity: 1;
			transform: scaleY(1);
		}
	}

	/* ─── MARQUEE ─── */
	.marquee-wrap {
		overflow: hidden;
		border-top: 1px solid var(--border);
		border-bottom: 1px solid var(--border);
	}
	.marquee-track {
		display: flex;
		animation: marquee 24s linear infinite;
		white-space: nowrap;
	}
	.marquee-track:hover {
		animation-play-state: paused;
	}
	.marquee-item {
		display: flex;
		align-items: center;
		gap: 16px;
		padding: 24px 40px;
		border-right: 1px solid var(--border);
		font-family: 'Bebas Neue', sans-serif;
		font-size: 18px;
		letter-spacing: 3px;
		color: var(--text-dim);
		flex-shrink: 0;
		cursor: default;
		transition: color 0.3s;
	}
	.marquee-item:hover {
		color: var(--white);
	}
	.dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--accent);
		flex-shrink: 0;
	}
	@keyframes marquee {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	/* ─── SECTIONS ─── */
	.section {
		padding: 120px 48px;
	}

	/* ─── SERVICES ─── */
	.services-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1px;
		background: var(--border);
		border: 1px solid var(--border);
	}
	.service-card {
		background: var(--black);
		padding: 48px 40px;
		position: relative;
		overflow: hidden;
		transition: background 0.3s;
	}
	.service-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: var(--accent);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.4s ease;
	}
	.service-card:hover::before {
		transform: scaleX(1);
	}
	.service-card:hover {
		background: var(--gray);
	}
	.service-num {
		font-family: 'Space Mono', monospace;
		font-size: 11px;
		color: var(--accent);
		opacity: 0.5;
		margin-bottom: 20px;
		letter-spacing: 2px;
	}
	.service-name {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 34px;
		color: var(--white);
		margin-bottom: 14px;
		letter-spacing: 1px;
	}
	.service-desc {
		font-size: 13px;
		color: var(--text-dim);
		line-height: 1.8;
		margin-bottom: 20px;
	}
	.service-link {
		font-family: 'Space Mono', monospace;
		font-size: 10px;
		letter-spacing: 2px;
		color: var(--accent);
		opacity: 0.7;
		transition: opacity 0.3s;
	}
	.service-link:hover {
		opacity: 1;
	}

	/* ─── PROJECTS ─── */
	.projects-section {
		padding-bottom: 0;
	}
	.projects-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin-bottom: 0;
	}
	.projects-header .section-title {
		margin-bottom: 0;
	}
	.projects-list {
		display: flex;
		flex-direction: column;
		gap: 1px;
		background: var(--border);
		margin-top: 48px;
	}

	.project-row {
		background: var(--black);
		padding: 32px 48px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 24px;
		transition:
			background 0.3s,
			padding-left 0.4s;
		position: relative;
		overflow: hidden;
		cursor: pointer;
	}
	.project-row::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 3px;
		background: var(--accent);
		transform: scaleY(0);
		transform-origin: bottom;
		transition: transform 0.4s;
	}
	.project-row:hover::before {
		transform: scaleY(1);
	}
	.project-row:hover {
		background: var(--gray);
		padding-left: 60px;
	}

	.pr-left {
		display: flex;
		align-items: center;
		gap: 28px;
		flex: 1;
	}
	.pr-num {
		font-family: 'Space Mono', monospace;
		font-size: 11px;
		color: var(--accent);
		opacity: 0.4;
		flex-shrink: 0;
	}
	.pr-name {
		font-family: 'Bebas Neue', sans-serif;
		font-size: clamp(28px, 3vw, 52px);
		color: var(--white);
		letter-spacing: 1px;
		line-height: 1;
	}
	.pr-desc {
		font-size: 13px;
		color: var(--text-dim);
		margin-top: 4px;
	}
	.pr-right {
		display: flex;
		gap: 24px;
		align-items: center;
		flex-shrink: 0;
	}
	.pr-tag {
		font-family: 'Space Mono', monospace;
		font-size: 10px;
		color: var(--text-dim);
		letter-spacing: 1px;
	}
	.pr-cat {
		font-family: 'Space Mono', monospace;
		font-size: 10px;
		letter-spacing: 2px;
		text-transform: uppercase;
	}
	.pr-year {
		font-family: 'Space Mono', monospace;
		font-size: 10px;
		color: var(--text-dim);
	}
	.pr-arrow {
		font-size: 20px;
		color: var(--accent);
		opacity: 0;
		transform: translateX(-10px);
		transition:
			opacity 0.3s,
			transform 0.3s;
	}
	.project-row:hover .pr-arrow {
		opacity: 1;
		transform: translateX(0);
	}
	.pr-accent-line {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1px;
		opacity: 0;
		transition: opacity 0.3s;
	}
	.project-row:hover .pr-accent-line {
		opacity: 0.3;
	}

	/* ─── STATS ─── */
	.stats-section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		min-height: 600px;
		background: var(--gray);
	}
	.stats-left {
		padding: 100px 80px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.stats-right {
		position: relative;
		overflow: hidden;
		background: #0d0d0d;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.stat {
		margin-bottom: 40px;
	}
	.stat-num {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 72px;
		color: var(--accent);
		line-height: 1;
	}
	.stat-label {
		font-family: 'Space Mono', monospace;
		font-size: 10px;
		letter-spacing: 3px;
		color: var(--text-dim);
		text-transform: uppercase;
		margin-top: 4px;
	}
	.stats-big-k {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 50vw;
		color: var(--white);
		opacity: 0.025;
		position: absolute;
		line-height: 1;
		user-select: none;
		pointer-events: none;
		will-change: transform;
	}
	.stats-badge {
		position: absolute;
		bottom: 40px;
		right: 40px;
		text-align: right;
	}
	.badge-line {
		font-family: 'Space Mono', monospace;
		font-size: 10px;
		letter-spacing: 2px;
		color: var(--text-dim);
		margin-bottom: 4px;
	}

	/* ─── TESTIMONIALS ─── */
	.testimonials-section {
		background: var(--black);
	}
	.testi-container {
		display: grid;
		grid-template-columns: 1fr 380px;
		gap: 60px;
		background: var(--gray);
		border: 1px solid var(--border);
		padding: 60px;
		margin-bottom: 32px;
	}
	.testi-main {
		position: relative;
	}
	.quote-mark {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 120px;
		color: var(--accent);
		opacity: 0.2;
		line-height: 0.7;
		margin-bottom: 24px;
	}
	.testi-quote {
		font-size: 20px;
		line-height: 1.7;
		color: var(--white);
		font-style: normal;
		font-weight: 600;
		margin-bottom: 40px;
		min-height: 120px;
	}
	.testi-author {
		display: flex;
		align-items: center;
		gap: 16px;
	}
	.testi-avatar {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: var(--accent);
		color: var(--black);
		font-family: 'Bebas Neue', sans-serif;
		font-size: 22px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}
	.testi-name {
		font-size: 15px;
		font-weight: 700;
		color: var(--white);
	}
	.testi-role {
		font-family: 'Space Mono', monospace;
		font-size: 10px;
		letter-spacing: 1px;
		color: var(--text-dim);
		margin-top: 3px;
	}

	.testi-sidebar {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
	.testi-thumb {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 16px;
		background: none;
		border: 1px solid transparent;
		cursor: pointer;
		text-align: left;
		transition:
			border-color 0.3s,
			background 0.3s;
	}
	.testi-thumb.active {
		border-color: var(--accent);
		background: rgba(200, 255, 0, 0.05);
	}
	.testi-thumb:hover {
		background: rgba(255, 255, 255, 0.03);
	}
	.thumb-avatar {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: var(--mid);
		color: var(--white);
		font-family: 'Bebas Neue', sans-serif;
		font-size: 18px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}
	.testi-thumb.active .thumb-avatar {
		background: var(--accent);
		color: var(--black);
	}
	.thumb-name {
		font-size: 13px;
		font-weight: 600;
		color: var(--white);
	}
	.thumb-role {
		font-family: 'Space Mono', monospace;
		font-size: 9px;
		letter-spacing: 1px;
		color: var(--text-dim);
		margin-top: 2px;
	}

	.testi-dots {
		display: flex;
		gap: 8px;
		justify-content: center;
	}
	.testi-dot {
		width: 24px;
		height: 8px;
		background: var(--border);
		border: none;
		cursor: pointer;
		transition:
			background 0.3s,
			width 0.3s;
	}
	.testi-dot.active {
		background: var(--accent);
		width: 40px;
	}

	/* ─── CTA ─── */
	.cta-section {
		background: var(--accent);
		padding: 120px 48px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.cta-content {
		text-align: center;
	}
	.cta-title {
		font-family: 'Bebas Neue', sans-serif;
		font-size: clamp(56px, 8vw, 120px);
		line-height: 0.95;
		color: var(--black);
		margin: 24px 0 48px;
	}
	.cta-actions {
		display: flex;
		gap: 24px;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}
	.cta-btn-primary {
		background: var(--black);
		color: var(--accent);
		padding: 18px 40px;
		font-family: 'Space Mono', monospace;
		font-size: 12px;
		letter-spacing: 2px;
		text-transform: uppercase;
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}
	.cta-btn-primary:hover {
		transform: translate(-2px, -2px);
		box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
	}
	.cta-btn-ghost {
		font-family: 'Space Mono', monospace;
		font-size: 12px;
		letter-spacing: 2px;
		color: var(--black);
		opacity: 0.6;
		text-transform: uppercase;
		transition: opacity 0.2s;
	}
	.cta-btn-ghost:hover {
		opacity: 1;
	}

	/* ─── RESPONSIVE ─── */
	@media (max-width: 900px) {
		.testi-container {
			grid-template-columns: 1fr;
		}
		.testi-sidebar {
			flex-direction: row;
			flex-wrap: wrap;
		}
		.stats-section {
			grid-template-columns: 1fr;
		}
		.stats-right {
			display: none;
		}
		.services-grid {
			grid-template-columns: 1fr 1fr;
		}
		.projects-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 16px;
		}
		.pr-right {
			display: none;
		}
	}
	@media (max-width: 600px) {
		.hero {
			padding: 0 24px 60px;
		}
		.section {
			padding: 80px 24px;
		}
		.services-grid {
			grid-template-columns: 1fr;
		}
		.testi-container {
			padding: 32px 24px;
		}
		.stats-left {
			padding: 60px 24px;
		}
		.cta-section {
			padding: 80px 24px;
		}
	}
</style>
