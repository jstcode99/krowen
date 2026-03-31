<script>
	import { onMount } from 'svelte';
	const categories = ['Todos', 'App Móvil', 'Web App', 'E-commerce', 'IA & Chatbot', 'Sistema'];

	let activeCategory = 'Todos';

	const projects = [
		{
			name: 'ReferidosCO',
			category: 'App Móvil',
			year: '2024',
			desc: 'Plataforma de referidos con sistema de recompensas en tiempo real. Los usuarios ganan puntos canjeables por referir amigos a servicios.',
			stack: ['React Native', 'Node.js', 'MongoDB'],
			color: '#c8ff00',
			status: 'Producción',
			results: ['10k+ usuarios activos', '95% retención mensual', 'Lanzado en 3 meses']
		},
		{
			name: 'Partner Chat',
			category: 'App Móvil',
			year: '2024',
			desc: 'App de mensajería instantánea para equipos de trabajo distribuidos con canales, hilos y compartición de archivos.',
			stack: ['Flutter', 'Firebase', 'WebSockets'],
			color: '#ff6b35',
			status: 'Producción',
			results: ['500+ empresas registradas', 'Mensajería en tiempo real', 'iOS & Android']
		},
		{
			name: 'TurnoExpress',
			category: 'Sistema',
			year: '2023',
			desc: 'Sistema de turnos y reservas para clínicas, peluquerías y consultorios. Reduce tiempos de espera y optimiza la agenda.',
			stack: ['SvelteKit', 'PostgreSQL', 'Stripe'],
			color: '#00d4ff',
			status: 'Producción',
			results: ['-60% tiempo de espera', '200+ negocios', 'Multi-sede']
		},
		{
			name: 'NómadaShop',
			category: 'E-commerce',
			year: '2023',
			desc: 'Tienda en línea completa con carrito de compras, pasarela de pago PSE, gestión de inventario y panel de administración.',
			stack: ['Next.js', 'Stripe', 'Prisma'],
			color: '#ff3d9a',
			status: 'Producción',
			results: ['$50M+ en ventas', '1500+ productos', 'Pago PSE integrado']
		},
		{
			name: 'KrowBot',
			category: 'IA & Chatbot',
			year: '2024',
			desc: 'Asistente virtual con IA para soporte y ventas automatizadas. Integrado con WhatsApp Business y el CRM del cliente.',
			stack: ['OpenAI GPT-4', 'Python', 'WhatsApp API'],
			color: '#a78bfa',
			status: 'Producción',
			results: ['+40% conversiones', '24/7 disponibilidad', '3 idiomas']
		},
		{
			name: 'HRFlow',
			category: 'Sistema',
			year: '2023',
			desc: 'Sistema de gestión de recursos humanos con nómina, control de asistencia, evaluaciones de desempeño y reportes automáticos.',
			stack: ['Django', 'React', 'PostgreSQL'],
			color: '#fbbf24',
			status: 'Producción',
			results: ['200+ empleados gestionados', 'Nómina automática', 'Cumplimiento legal CO']
		},
		{
			name: 'BodegApp',
			category: 'Web App',
			year: '2024',
			desc: 'Dashboard de control de inventario para bodegas con alertas de stock mínimo, trazabilidad de productos y reportes en tiempo real.',
			stack: ['SvelteKit', 'Supabase', 'Chart.js'],
			color: '#34d399',
			status: 'En desarrollo',
			results: ['Alertas automáticas', 'Trazabilidad total', 'Multi-usuario']
		},
		{
			name: 'VetOnline',
			category: 'Web App',
			year: '2024',
			desc: 'Plataforma de telemedicina veterinaria con videollamadas, historial médico de mascotas y prescripciones digitales.',
			stack: ['Next.js', 'WebRTC', 'Prisma'],
			color: '#f472b6',
			status: 'Producción',
			results: ['500+ consultas/mes', 'Video en tiempo real', 'Historial digital']
		}
	];

	onMount(() => {
		const reveals = document.querySelectorAll('.reveal');
		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
					}
				});
			},
			{ threshold: 0.1 }
		);

		reveals.forEach((el) => obs.observe(el));

		return () => obs.disconnect();
	});

	const filtered = $derived(
		activeCategory === 'Todos' ? projects : projects.filter((p) => p.category === activeCategory)
	);
</script>

<svelte:head>
	<title>Proyectos — Krowen</title>
	<meta
		name="description"
		content="Portafolio de proyectos desarrollados por Krowen: apps móviles, sistemas web, chatbots y más."
	/>

	<!-- Open Graph -->
	<meta property="og:title" content="Proyectos — Krowen" />
	<meta
		property="og:description"
		content="Portafolio de proyectos desarrollados por Krowen: apps móviles, sistemas web, chatbots y más."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://krowen.co/proyectos" />
	<meta property="og:image" content="https://krowen.co/og-image.jpg" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Proyectos — Krowen" />
	<meta
		name="twitter:description"
		content="Portafolio de proyectos desarrollados por Krowen: apps móviles, sistemas web, chatbots y más."
	/>
	<meta name="twitter:image" content="https://krowen.co/og-image.jpg" />
</svelte:head>

<!-- HERO -->
<section class="page-hero">
	<div class="ph-bg-text">Work</div>
	<div class="ph-content">
		<div class="section-label">Portafolio</div>
		<h1 class="ph-title">Proyectos<br /><span class="ac">Recientes</span></h1>
		<p class="ph-sub">
			Construcciones reales, con impacto real. Cada proyecto es una historia de colaboración.
		</p>
	</div>
	<div class="ph-stats">
		<div class="ph-stat">
			<div class="ps-num">50+</div>
			<div class="ps-lbl">Proyectos</div>
		</div>
		<div class="ph-stat">
			<div class="ps-num">3+</div>
			<div class="ps-lbl">Años</div>
		</div>
		<div class="ph-stat">
			<div class="ps-num">100%</div>
			<div class="ps-lbl">Satisfacción</div>
		</div>
	</div>
</section>

<!-- FILTER + GRID -->
<section class="projects-section">
	<div class="filters">
		{#each categories as cat}
			<button
				class="filter-btn"
				class:active={activeCategory === cat}
				on:click={() => (activeCategory = cat)}
			>
				{cat}
				{#if cat !== 'Todos'}
					<span class="filter-count">{projects.filter((p) => p.category === cat).length}</span>
				{:else}
					<span class="filter-count">{projects.length}</span>
				{/if}
			</button>
		{/each}
	</div>

	<div class="projects-grid">
		{#each filtered as p, i (p.name)}
			<div class="project-card reveal" style="--c:{p.color}">
				<div class="pc-top">
					<div class="pc-header">
						<span class="pc-cat" style="color:{p.color}">{p.category}</span>
						<span class="pc-status" class:prod={p.status === 'Producción'}>{p.status}</span>
					</div>
					<h3 class="pc-name">{p.name}</h3>
					<p class="pc-desc">{p.desc}</p>
				</div>
				<div class="pc-bottom">
					<div class="pc-results">
						{#each p.results as r}
							<span class="pc-result">✦ {r}</span>
						{/each}
					</div>
					<div class="pc-stack">
						{#each p.stack as t}
							<span class="pc-tech">{t}</span>
						{/each}
					</div>
					<div class="pc-footer">
						<span class="pc-year">{p.year}</span>
						<a href="/contacto" class="pc-cta">Proyecto similar →</a>
					</div>
				</div>
				<div class="pc-accent" style="background:{p.color}"></div>
			</div>
		{/each}
	</div>
</section>

<!-- CTA -->
<section class="cta-section">
	<div class="section-label" style="color:var(--black)"><span></span>¿El tuyo es el siguiente?</div>
	<h2 class="cta-title">Cuéntanos tu<br />proyecto</h2>
	<div class="cta-actions">
		<a href="/contacto" class="cta-primary">Iniciar proyecto</a>
		<a href="https://calendly.com/krowen/30min" target="_blank" class="cta-ghost"
			>Agendar llamada →</a
		>
	</div>
</section>

<style>
	.page-hero {
		min-height: 65vh;
		padding: 120px 48px 80px;
		position: relative;
		overflow: hidden;
		border-bottom: 1px solid var(--border);
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: end;
		gap: 60px;
	}
	.ph-bg-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: 'Bebas Neue', sans-serif;
		font-size: 30vw;
		color: var(--white);
		opacity: 0.02;
		user-select: none;
		white-space: nowrap;
	}
	.ph-content {
		position: relative;
		z-index: 2;
	}
	.ph-title {
		font-family: 'Bebas Neue', sans-serif;
		font-size: clamp(64px, 9vw, 140px);
		line-height: 0.92;
		color: var(--white);
		margin: 16px 0 24px;
	}
	.ac {
		color: var(--accent);
	}
	.ph-sub {
		font-size: 16px;
		color: var(--text-dim);
		max-width: 460px;
		line-height: 1.7;
	}
	.ph-stats {
		display: flex;
		flex-direction: column;
		gap: 32px;
		position: relative;
		z-index: 2;
	}
	.ph-stat {
		text-align: right;
	}
	.ps-num {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 48px;
		color: var(--accent);
		line-height: 1;
	}
	.ps-lbl {
		font-family: 'Space Mono', monospace;
		font-size: 10px;
		letter-spacing: 2px;
		color: var(--text-dim);
		text-transform: uppercase;
	}

	/* Filters */
	.projects-section {
		padding: 80px 48px;
	}
	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-bottom: 60px;
		border-bottom: 1px solid var(--border);
		padding-bottom: 32px;
	}
	.filter-btn {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 10px 20px;
		background: none;
		border: 1px solid var(--border);
		color: var(--text-dim);
		font-family: 'Space Mono', monospace;
		font-size: 11px;
		letter-spacing: 1px;
		cursor: pointer;
		transition: all 0.3s;
		text-transform: uppercase;
	}
	.filter-btn:hover {
		border-color: var(--white);
		color: var(--white);
	}
	.filter-btn.active {
		border-color: var(--accent);
		color: var(--accent);
		background: rgba(200, 255, 0, 0.05);
	}
	.filter-count {
		font-size: 9px;
		opacity: 0.6;
	}

	/* Grid */
	.projects-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1px;
		background: var(--border);
		border: 1px solid var(--border);
	}
	.project-card {
		background: var(--black);
		padding: 40px 36px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 32px;
		position: relative;
		overflow: hidden;
		transition: background 0.3s;
	}
	.project-card:hover {
		background: var(--gray);
	}
	.pc-accent {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		opacity: 0;
		transition: opacity 0.3s;
	}
	.project-card:hover .pc-accent {
		opacity: 1;
	}

	.pc-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 16px;
	}
	.pc-cat {
		font-family: 'Space Mono', monospace;
		font-size: 10px;
		letter-spacing: 2px;
		text-transform: uppercase;
	}
	.pc-status {
		font-family: 'Space Mono', monospace;
		font-size: 9px;
		letter-spacing: 1px;
		padding: 4px 10px;
		border: 1px solid var(--border);
		color: var(--text-dim);
		text-transform: uppercase;
	}
	.pc-status.prod {
		border-color: rgba(200, 255, 0, 0.3);
		color: var(--accent);
	}
	.pc-name {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 40px;
		color: var(--white);
		margin-bottom: 12px;
		letter-spacing: 1px;
	}
	.pc-desc {
		font-size: 13px;
		color: var(--text-dim);
		line-height: 1.7;
	}

	.pc-results {
		display: flex;
		flex-direction: column;
		gap: 6px;
		margin-bottom: 20px;
	}
	.pc-result {
		font-family: 'Space Mono', monospace;
		font-size: 10px;
		letter-spacing: 1px;
		color: var(--c);
	}
	.pc-stack {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-bottom: 20px;
	}
	.pc-tech {
		font-family: 'Space Mono', monospace;
		font-size: 9px;
		padding: 4px 10px;
		border: 1px solid var(--border);
		color: var(--text-dim);
		letter-spacing: 1px;
	}
	.pc-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.pc-year {
		font-family: 'Space Mono', monospace;
		font-size: 10px;
		color: var(--text-dim);
	}
	.pc-cta {
		font-family: 'Space Mono', monospace;
		font-size: 10px;
		letter-spacing: 1px;
		color: var(--c);
		opacity: 0;
		transition: opacity 0.3s;
	}
	.project-card:hover .pc-cta {
		opacity: 1;
	}

	/* CTA */
	.cta-section {
		background: var(--accent);
		padding: 100px 48px;
		text-align: center;
	}
	.cta-title {
		font-family: 'Bebas Neue', sans-serif;
		font-size: clamp(48px, 7vw, 100px);
		line-height: 0.95;
		color: var(--black);
		margin: 20px 0 48px;
	}
	.cta-actions {
		display: flex;
		gap: 24px;
		justify-content: center;
		flex-wrap: wrap;
	}
	.cta-primary {
		background: var(--black);
		color: var(--accent);
		padding: 16px 36px;
		font-family: 'Space Mono', monospace;
		font-size: 11px;
		letter-spacing: 2px;
		text-transform: uppercase;
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}
	.cta-primary:hover {
		transform: translate(-2px, -2px);
		box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
	}
	.cta-ghost {
		font-family: 'Space Mono', monospace;
		font-size: 11px;
		letter-spacing: 2px;
		color: var(--black);
		opacity: 0.6;
		text-transform: uppercase;
		transition: opacity 0.2s;
		display: flex;
		align-items: center;
	}
	.cta-ghost:hover {
		opacity: 1;
	}

	@media (max-width: 900px) {
		.page-hero {
			grid-template-columns: 1fr;
		}
		.ph-stats {
			flex-direction: row;
		}
		.ph-stat {
			text-align: left;
		}
		.projects-grid {
			grid-template-columns: 1fr 1fr;
		}
		.projects-section {
			padding: 60px 24px;
		}
		.page-hero {
			padding: 120px 24px 60px;
		}
	}
	@media (max-width: 600px) {
		.projects-grid {
			grid-template-columns: 1fr;
		}
		.cta-section {
			padding: 80px 24px;
		}
	}
</style>
