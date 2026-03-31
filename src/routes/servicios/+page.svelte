<script>
	import { onMount } from 'svelte';

	const services = [
		{
			num: '01',
			name: 'Desarrollo Web',
			icon: '◈',
			short: 'Sitios y aplicaciones web de alta calidad.',
			desc: 'Creamos sitios web y aplicaciones web que combinan diseño impactante con rendimiento técnico. Desde landing pages hasta plataformas complejas con autenticación, bases de datos y lógica de negocio. Usamos tecnologías modernas como SvelteKit, Next.js, y frameworks de backend robustos.',
			features: [
				'Landing pages y sitios corporativos',
				'Web Apps con autenticación y dashboard',
				'APIs REST y GraphQL',
				'Optimización SEO y rendimiento',
				'Hosting y despliegue incluido'
			],
			stack: ['SvelteKit', 'Next.js', 'Node.js', 'PostgreSQL', 'Vercel'],
			color: '#c8ff00'
		},
		{
			num: '02',
			name: 'Apps Móviles',
			icon: '◉',
			short: 'Aplicaciones nativas y multiplataforma.',
			desc: 'Desarrollamos aplicaciones móviles para iOS y Android que ofrecen una experiencia fluida y nativa. Ya sea que necesites una app de negocio, una plataforma de comercio o una herramienta interna, la construimos con las mejores prácticas del mercado.',
			features: [
				'Apps iOS y Android nativas',
				'Desarrollo multiplataforma',
				'Integración con APIs externas',
				'Notificaciones push',
				'Publicación en tiendas'
			],
			stack: ['Flutter', 'React Native', 'Firebase', 'Dart'],
			color: '#ff6b35'
		},
		{
			num: '03',
			name: 'UI & UX Design',
			icon: '◇',
			short: 'Interfaces centradas en el usuario.',
			desc: 'El diseño es la primera impresión. Creamos experiencias de usuario que combinan estética y funcionalidad. Desde la investigación de usuarios hasta el prototipo final, cada decisión de diseño tiene un propósito.',
			features: [
				'Wireframes y prototipos interactivos',
				'Diseño de sistemas (Design System)',
				'Tests de usabilidad',
				'Diseño responsive',
				'Handoff a desarrollo'
			],
			stack: ['Figma', 'Adobe XD', 'Framer', 'Storybook'],
			color: '#00d4ff'
		},
		{
			num: '04',
			name: 'Chatbots & IA',
			icon: '◎',
			short: 'Automatización inteligente para tu negocio.',
			desc: 'Implementamos chatbots y agentes de IA que atienden clientes, califican leads y automatizan procesos. Integramos directamente con WhatsApp, Telegram, tu web o cualquier canal donde estén tus clientes.',
			features: [
				'Chatbots para WhatsApp y web',
				'Agentes de ventas automatizados',
				'Soporte 24/7 sin intervención humana',
				'Integración con CRM',
				'Análisis de conversaciones'
			],
			stack: ['OpenAI', 'LangChain', 'WhatsApp Business API', 'Python'],
			color: '#a78bfa'
		},
		{
			num: '05',
			name: 'Sistemas a Medida',
			icon: '◐',
			short: 'Software personalizado para tus procesos.',
			desc: 'Cada empresa es única. Construimos software que se adapta exactamente a tus procesos: sistemas de gestión, inventarios, ERPs, CRMs o cualquier herramienta interna que necesites para operar con más eficiencia.',
			features: [
				'Sistemas de gestión empresarial',
				'Control de inventarios',
				'Gestión de recursos humanos',
				'Facturación y contabilidad',
				'Dashboards y reportes'
			],
			stack: ['Django', 'FastAPI', 'PostgreSQL', 'React', 'Docker'],
			color: '#ff3d9a'
		},
		{
			num: '06',
			name: 'Consultoría Digital',
			icon: '◑',
			short: 'Estrategia y acompañamiento end-to-end.',
			desc: 'No solo construimos software: te ayudamos a tomar las mejores decisiones tecnológicas. Evaluamos tu stack, definimos la arquitectura y te acompañamos durante todo el proceso de desarrollo con mentoría continua.',
			features: [
				'Evaluación tecnológica',
				'Arquitectura de soluciones',
				'Revisión de código y auditoría',
				'Mentoring a equipos',
				'Estrategia de producto digital'
			],
			stack: ['Metodologías ágiles', 'Scrum', 'Lean startup'],
			color: '#fbbf24'
		}
	];

	let activeService = $state(0);

	onMount(() => {
		const reveals = document.querySelectorAll('.reveal');
		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) e.target.classList.add('visible');
				});
			},
			{ threshold: 0.12 }
		);
		reveals.forEach((el) => obs.observe(el));
		return () => obs.disconnect();
	});
</script>

<svelte:head>
	<title>Servicios — Krowen</title>
	<meta
		name="description"
		content="Desarrollo web, apps móviles, UI/UX, chatbots, sistemas a medida y consultoría digital."
	/>

	<!-- Open Graph -->
	<meta property="og:title" content="Servicios — Krowen" />
	<meta
		property="og:description"
		content="Desarrollo web, apps móviles, UI/UX, chatbots, sistemas a medida y consultoría digital."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://krowen.co/servicios" />
	<meta property="og:image" content="https://krowen.co/og-image.jpg" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Servicios — Krowen" />
	<meta
		name="twitter:description"
		content="Desarrollo web, apps móviles, UI/UX, chatbots, sistemas a medida y consultoría digital."
	/>
	<meta name="twitter:image" content="https://krowen.co/og-image.jpg" />
</svelte:head>

<!-- PAGE HERO -->
<section class="page-hero">
	<div class="ph-bg-text">Servicios</div>
	<div class="ph-content">
		<div class="section-label">Lo que hacemos</div>
		<h1 class="ph-title">Nuestros<br /><span class="ac">Servicios</span></h1>
		<p class="ph-sub">
			Soluciones digitales completas para empresas y emprendedores. Del concepto al producto final.
		</p>
	</div>
</section>

<!-- SERVICE DETAIL -->
<section class="service-detail-section">
	<div class="sd-tabs">
		{#each services as s, i}
			<button
				class="sd-tab"
				class:active={i === activeService}
				onclick={() => (activeService = i)}
			>
				<span class="sd-tab-num">{s.num}</span>
				<span class="sd-tab-name">{s.name}</span>
			</button>
		{/each}
	</div>

	<div class="sd-panel">
		{#key activeService}
			{@const s = services[activeService]}
			<div class="sd-content">
				<div class="sd-left">
					<div class="sd-icon" style="color:{s.color}">{s.icon}</div>
					<h2 class="sd-title">{s.name}</h2>
					<p class="sd-desc">{s.desc}</p>
					<a href="/contacto" class="btn-primary">Cotizar este servicio</a>
				</div>
				<div class="sd-right">
					<div class="sd-block">
						<div class="sd-block-title">Qué incluye</div>
						<ul class="sd-list">
							{#each s.features as f}
								<li><span class="li-dot" style="background:{s.color}"></span>{f}</li>
							{/each}
						</ul>
					</div>
					<div class="sd-block">
						<div class="sd-block-title">Tecnologías</div>
						<div class="sd-stack">
							{#each s.stack as t}
								<span class="stack-tag" style="border-color:{s.color}30; color:{s.color}">{t}</span>
							{/each}
						</div>
					</div>
				</div>
			</div>
		{/key}
	</div>
</section>

<!-- ALL SERVICES GRID -->
<section class="all-services section">
	<div class="section-label reveal">Visión general</div>
	<h2 class="section-title reveal reveal-d1">Todo lo que<br />ofrecemos</h2>
	<div class="as-grid">
		{#each services as s, i}
			<div class="as-card reveal reveal-d{(i % 3) + 1}" style="--c:{s.color}">
				<div class="as-num">{s.num}</div>
				<div class="as-icon">{s.icon}</div>
				<div class="as-name">{s.name}</div>
				<p class="as-desc">{s.short}</p>
				<button
					class="as-link"
					onclick={() => {
						activeService = i;
						window.scrollTo({ top: 0, behavior: 'smooth' });
					}}
				>
					Ver detalle →
				</button>
			</div>
		{/each}
	</div>
</section>

<!-- CTA -->
<section class="cta-section">
	<div class="section-label" style="color:var(--black)"><span></span>¿Listo para empezar?</div>
	<h2 class="cta-title">Agenda tu asesoría<br />sin costo</h2>
	<div class="cta-actions">
		<a href="https://calendly.com/krowen/30min" target="_blank" class="cta-primary"
			>Agendar llamada gratuita</a
		>
		<a href="/contacto" class="cta-ghost">Enviar mensaje →</a>
	</div>
</section>

<style>
	.page-hero {
		min-height: 60vh;
		display: flex;
		align-items: flex-end;
		padding: 120px 48px 80px;
		position: relative;
		overflow: hidden;
		border-bottom: 1px solid var(--border);
	}
	.ph-bg-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: 'Bebas Neue', sans-serif;
		font-size: 28vw;
		color: var(--white);
		opacity: 0.025;
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
		max-width: 500px;
		line-height: 1.7;
	}

	/* Detail */
	.service-detail-section {
		display: grid;
		grid-template-columns: 280px 1fr;
		min-height: 70vh;
		border-bottom: 1px solid var(--border);
	}
	.sd-tabs {
		border-right: 1px solid var(--border);
		display: flex;
		flex-direction: column;
	}
	.sd-tab {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 24px 28px;
		background: none;
		border: none;
		border-bottom: 1px solid var(--border);
		text-align: left;
		cursor: pointer;
		transition: background 0.3s;
	}
	.sd-tab:hover {
		background: rgba(255, 255, 255, 0.03);
	}
	.sd-tab.active {
		background: rgba(200, 255, 0, 0.05);
		border-right: 2px solid var(--accent);
		margin-right: -1px;
	}
	.sd-tab-num {
		font-family: 'Space Mono', monospace;
		font-size: 10px;
		color: var(--accent);
		opacity: 0.5;
	}
	.sd-tab-name {
		font-family: 'Syne', sans-serif;
		font-size: 14px;
		font-weight: 600;
		color: var(--white);
	}
	.sd-tab.active .sd-tab-name {
		color: var(--accent);
	}

	.sd-panel {
		padding: 60px;
	}
	.sd-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 60px;
		animation: fadeUp 0.4s ease;
	}
	@keyframes fadeUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.sd-icon {
		font-size: 48px;
		margin-bottom: 16px;
	}
	.sd-title {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 56px;
		color: var(--white);
		margin-bottom: 20px;
		letter-spacing: 1px;
	}
	.sd-desc {
		font-size: 15px;
		color: var(--text-dim);
		line-height: 1.8;
		margin-bottom: 36px;
	}

	.sd-block {
		margin-bottom: 40px;
	}
	.sd-block-title {
		font-family: 'Space Mono', monospace;
		font-size: 10px;
		letter-spacing: 3px;
		color: var(--accent);
		text-transform: uppercase;
		margin-bottom: 20px;
	}
	.sd-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.sd-list li {
		display: flex;
		align-items: center;
		gap: 12px;
		font-size: 14px;
		color: var(--white);
	}
	.li-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		flex-shrink: 0;
	}
	.sd-stack {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
	.stack-tag {
		padding: 6px 14px;
		border: 1px solid;
		font-family: 'Space Mono', monospace;
		font-size: 10px;
		letter-spacing: 1px;
	}

	/* All services */
	.section {
		padding: 120px 48px;
	}
	.as-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1px;
		background: var(--border);
		border: 1px solid var(--border);
	}
	.as-card {
		background: var(--black);
		padding: 48px 36px;
		position: relative;
		overflow: hidden;
		transition: background 0.3s;
	}
	.as-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: var(--c, var(--accent));
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.4s;
	}
	.as-card:hover::before {
		transform: scaleX(1);
	}
	.as-card:hover {
		background: var(--gray);
	}
	.as-num {
		font-family: 'Space Mono', monospace;
		font-size: 10px;
		color: var(--accent);
		opacity: 0.4;
		margin-bottom: 16px;
		letter-spacing: 2px;
	}
	.as-icon {
		font-size: 28px;
		color: var(--c);
		margin-bottom: 16px;
	}
	.as-name {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 32px;
		color: var(--white);
		margin-bottom: 12px;
	}
	.as-desc {
		font-size: 13px;
		color: var(--text-dim);
		line-height: 1.7;
		margin-bottom: 20px;
	}
	.as-link {
		background: none;
		border: none;
		font-family: 'Space Mono', monospace;
		font-size: 10px;
		letter-spacing: 2px;
		color: var(--c);
		cursor: pointer;
		text-transform: uppercase;
		transition: opacity 0.3s;
		opacity: 0.7;
	}
	.as-link:hover {
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
		.service-detail-section {
			grid-template-columns: 1fr;
		}
		.sd-tabs {
			flex-direction: row;
			overflow-x: auto;
			border-right: none;
			border-bottom: 1px solid var(--border);
		}
		.sd-tab {
			flex-shrink: 0;
			border-bottom: none;
		}
		.sd-content {
			grid-template-columns: 1fr;
		}
		.as-grid {
			grid-template-columns: 1fr 1fr;
		}
		.page-hero {
			padding: 120px 24px 60px;
		}
		.section {
			padding: 80px 24px;
		}
		.sd-panel {
			padding: 40px 24px;
		}
	}
	@media (max-width: 600px) {
		.as-grid {
			grid-template-columns: 1fr;
		}
		.cta-section {
			padding: 80px 24px;
		}
	}
</style>
