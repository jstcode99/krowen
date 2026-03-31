<script>
	import { onMount } from 'svelte';

	let form = $state({ name: '', email: '', company: '', service: '', budget: '', message: '' });
	let sent = $state(false);
	let sending = $state(false);
	let error = $state('');

	const services = [
		'Desarrollo Web',
		'App Móvil',
		'UI & UX Design',
		'Chatbot & IA',
		'Sistema a Medida',
		'Consultoría',
		'No lo sé aún'
	];
	const budgets = [
		'< $2.000 USD',
		'$2.000 – $5.000 USD',
		'$5.000 – $15.000 USD',
		'> $15.000 USD',
		'Por definir'
	];

	async function handleSubmit() {
		sending = true;
		error = '';
		try {
			const res = await fetch('/contacto', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(form)
			});
			if (!res.ok) {
				const data = await res.json();
				error = data.error ?? 'Error al enviar. Intenta nuevamente.';
			} else {
				sent = true;
			}
		} catch {
			error = 'Error de conexión. Intenta nuevamente.';
		} finally {
			sending = false;
		}
	}

	const info = [
		{ icon: '◈', label: 'Email', value: 'hola@krowen.lat', href: 'mailto:hola@krowen.lat' },
		{ icon: '◎', label: 'WhatsApp', value: '+57 314 211 5239', href: 'https://wa.me/573142115239' },
		{ icon: '◇', label: 'Ubicación', value: 'Villavicencio, Meta, Colombia', href: null },
		{ icon: '◉', label: 'Horario', value: 'Lun–Vie 8am–6pm COT', href: null }
	];

	onMount(() => {
		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) e.target.classList.add('visible');
				});
			},
			{ threshold: 0.1 }
		);
		document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
		return () => obs.disconnect();
	});
</script>

<svelte:head>
	<title>Contacto y Cotización de Proyectos Digitales — Krowen</title>
	<meta
		name="description"
		content="Contáctanos para cotizar tu proyecto digital: desarrollo web, apps móviles, chatbots, UI/UX y sistemas a medida. Respuesta rápida en menos de 24 horas para pymes, startups y CEOs en Colombia."
	/>
	<meta name="keywords" content="contacto agencia de software, cotización proyectos digitales, desarrollo web, apps móviles, chatbots, UI/UX, sistemas a medida, consultoría digital, pymes Colombia, startups Colombia, CEO, innovación tecnológica, transformación digital, soluciones digitales personalizadas, contacto rápido" />

	<!-- Open Graph / Facebook -->
	<meta property="og:title" content="Contacto y Cotización de Proyectos Digitales — Krowen" />
	<meta
		property="og:description"
		content="Contáctanos para cotizar tu proyecto digital: desarrollo web, apps móviles, chatbots, UI/UX y sistemas a medida. Atendemos pymes, startups y CEOs en Colombia con soluciones innovadoras y rápidas."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://krowen.lat/contacto" />
	<meta property="og:image" content="https://krowen.lat/krowen.webp" />
</svelte:head>

<!-- HERO -->
<section class="contact-hero">
	<div class="ch-bg">Contacto</div>
	<div class="ch-content">
		<div class="section-label">Hablemos</div>
		<h1 class="ch-title">¿Tienes una<br /><span class="ac">idea?</span><br />Cuéntanos.</h1>
		<p class="ch-sub">Respondemos en menos de 24 horas. Sin compromisos, sin letra pequeña.</p>
	</div>
</section>

<!-- MAIN CONTACT -->
<section class="contact-main">
	<!-- Info cards -->
	<div class="info-grid reveal">
		{#each info as item}
			<div class="info-card">
				<div class="info-icon">{item.icon}</div>
				<div class="info-label">{item.label}</div>
				{#if item.href}
					<a
						href={item.href}
						class="info-value"
						target={item.href.startsWith('http') ? '_blank' : ''}>{item.value}</a
					>
				{:else}
					<div class="info-value muted">{item.value}</div>
				{/if}
			</div>
		{/each}
	</div>

	<div class="contact-layout">
		<!-- FORM -->
		<div class="form-wrapper reveal reveal-d1">
			{#if sent}
				<div class="success-state">
					<div class="success-icon">✓</div>
					<h3>¡Mensaje enviado!</h3>
					<p>
						Te contactaremos en menos de 24 horas. Mientras tanto, puedes agendar una llamada
						directamente.
					</p>
					<a
						href="https://calendly.com/krowen/30min"
						target="_blank"
						class="btn-primary"
						style="display:inline-block;margin-top:24px">Agendar llamada →</a
					>
				</div>
			{:else}
				<div class="form-header">
					<div class="section-label">Formulario de contacto</div>
					<h2 class="form-title">Cuéntanos tu proyecto</h2>
				</div>
				<form
					onsubmit={(e) => {
						e.preventDefault();
						handleSubmit();
					}}
					class="contact-form"
				>
					<div class="form-row">
						<div class="form-group">
							<label for="name">Nombre completo *</label>
							<input
								id="name"
								type="text"
								bind:value={form.name}
								placeholder="Tu nombre"
								required
							/>
						</div>
						<div class="form-group">
							<label for="email">Email *</label>
							<input
								id="email"
								type="email"
								bind:value={form.email}
								placeholder="tu@email.com"
								required
							/>
						</div>
					</div>
					<div class="form-row">
						<div class="form-group">
							<label for="company">Empresa / Proyecto</label>
							<input
								id="company"
								type="text"
								bind:value={form.company}
								placeholder="Nombre de tu empresa"
							/>
						</div>
						<div class="form-group">
							<label for="service">Servicio de interés *</label>
							<select id="service" bind:value={form.service} required>
								<option value="" disabled selected>Selecciona un servicio</option>
								{#each services as s}
									<option value={s}>{s}</option>
								{/each}
							</select>
						</div>
					</div>
					<div class="form-group">
						<label>Presupuesto estimado</label>
						<div class="budget-options">
							{#each budgets as b}
								<button
									type="button"
									class="budget-opt"
									class:active={form.budget === b}
									onclick={() => (form.budget = b)}
								>
									{b}
								</button>
							{/each}
						</div>
					</div>
					<div class="form-group">
						<label for="message">Cuéntanos tu idea *</label>
						<textarea
							id="message"
							rows="5"
							bind:value={form.message}
							placeholder="Describe tu proyecto, qué problema resuelve y qué necesitas..."
							required
						></textarea>
					</div>
					{#if error}
						<p class="form-error">{error}</p>
					{/if}
					<button type="submit" class="submit-btn" disabled={sending}>
						{#if sending}
							<span class="sending-dots">Enviando<span>.</span><span>.</span><span>.</span></span>
						{:else}
							Enviar mensaje →
						{/if}
					</button>
				</form>
			{/if}
		</div>

		<!-- SIDEBAR -->
		<div class="contact-sidebar reveal reveal-d2">
			<div class="sidebar-block">
				<div class="sb-title">¿Prefieres una llamada?</div>
				<p class="sb-text">
					Agenda una sesión de 30 minutos gratuita. Sin presión, solo conversamos sobre tu proyecto.
				</p>
				<a href="https://calendly.com/krowen/30min" target="_blank" class="calendly-btn">
					<span class="cb-icon">📅</span>
					Agendar en Calendly
				</a>
			</div>

			<div class="sidebar-block wa-block">
				<div class="sb-title">WhatsApp directo</div>
				<p class="sb-text">Para consultas rápidas o si prefieres chatear, escríbenos directo.</p>
				<a
					href="https://wa.me/573142115239?text=Hola%20Krowen%2C%20quiero%20cotizar%20un%20proyecto"
					target="_blank"
					class="wa-cta"
				>
					<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
						<path
							d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
						/>
					</svg>
					Escribir por WhatsApp
				</a>
			</div>

			<div class="sidebar-block faq-block">
				<div class="sb-title">Preguntas frecuentes</div>
				{#each [['¿Cuánto demora un proyecto?', 'Depende de la complejidad. Una landing page puede estar en 2 semanas; un sistema completo puede tomar 2-4 meses.'], ['¿Trabajan con startups?', 'Sí, trabajamos con emprendedores, startups y empresas medianas. Adaptamos los presupuestos.'], ['¿Incluye el diseño?', 'Sí, el diseño UI/UX está incluido en todos nuestros proyectos de desarrollo.'], ['¿Dan soporte después del lanzamiento?', 'Ofrecemos planes de mantenimiento mensual para todos los proyectos que desarrollamos.']] as [q, a]}
					<details class="faq-item">
						<summary>{q}</summary>
						<p>{a}</p>
					</details>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	/* Hero */
	.contact-hero {
		min-height: 60vh;
		padding: 120px 48px 80px;
		position: relative;
		overflow: hidden;
		display: flex;
		align-items: flex-end;
		border-bottom: 1px solid var(--border);
	}
	.ch-bg {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: 'Bebas Neue', sans-serif;
		font-size: 26vw;
		color: var(--white);
		opacity: 0.02;
		user-select: none;
		white-space: nowrap;
		pointer-events: none;
	}
	.ch-content {
		position: relative;
		z-index: 2;
	}
	.ch-title {
		font-family: 'Bebas Neue', sans-serif;
		font-size: clamp(64px, 9vw, 140px);
		line-height: 0.92;
		color: var(--white);
		margin: 16px 0 24px;
	}
	.ac {
		color: var(--accent);
	}
	.ch-sub {
		font-size: 16px;
		color: var(--text-dim);
		max-width: 440px;
		line-height: 1.7;
	}

	/* Main */
	.contact-main {
		padding: 80px 48px 120px;
	}

	.info-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1px;
		background: var(--border);
		border: 1px solid var(--border);
		margin-bottom: 80px;
	}
	.info-card {
		background: var(--black);
		padding: 32px 28px;
		transition: background 0.3s;
	}
	.info-card:hover {
		background: var(--gray);
	}
	.info-icon {
		font-size: 20px;
		color: var(--accent);
		margin-bottom: 12px;
	}
	.info-label {
		font-family: 'Space Mono', monospace;
		font-size: 9px;
		letter-spacing: 3px;
		color: var(--text-dim);
		text-transform: uppercase;
		margin-bottom: 8px;
	}
	.info-value {
		font-size: 14px;
		color: var(--white);
		font-weight: 600;
		text-decoration: none;
		transition: color 0.3s;
	}
	.info-value:hover {
		color: var(--accent);
	}
	.info-value.muted {
		color: var(--text-dim);
		font-weight: 400;
	}

	/* Layout */
	.contact-layout {
		display: grid;
		grid-template-columns: 1fr 380px;
		gap: 60px;
		align-items: start;
	}

	/* Form */
	.form-wrapper {
		background: var(--gray);
		border: 1px solid var(--border);
		padding: 56px;
	}
	.form-header {
		margin-bottom: 40px;
	}
	.form-title {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 48px;
		color: var(--white);
		margin-top: 12px;
		letter-spacing: 1px;
	}
	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 28px;
	}
	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
	}
	.form-group {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	label {
		font-family: 'Space Mono', monospace;
		font-size: 10px;
		letter-spacing: 2px;
		color: var(--text-dim);
		text-transform: uppercase;
	}
	input,
	select,
	textarea {
		background: var(--black);
		border: 1px solid var(--border);
		color: var(--white);
		padding: 14px 16px;
		font-family: 'Syne', sans-serif;
		font-size: 14px;
		outline: none;
		transition: border-color 0.3s;
		width: 100%;
	}
	input:focus,
	select:focus,
	textarea:focus {
		border-color: var(--accent);
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--text-dim);
	}
	select {
		cursor: pointer;
	}
	select option {
		background: var(--gray);
	}
	textarea {
		resize: vertical;
		min-height: 120px;
	}

	.budget-options {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
	.budget-opt {
		padding: 8px 16px;
		background: none;
		border: 1px solid var(--border);
		color: var(--text-dim);
		font-family: 'Space Mono', monospace;
		font-size: 10px;
		letter-spacing: 1px;
		cursor: pointer;
		transition: all 0.3s;
		text-transform: uppercase;
	}
	.budget-opt:hover {
		border-color: var(--white);
		color: var(--white);
	}
	.budget-opt.active {
		border-color: var(--accent);
		color: var(--accent);
		background: rgba(200, 255, 0, 0.05);
	}

	.form-error {
		color: #ff4d4d;
		font-family: 'Space Mono', monospace;
		font-size: 11px;
		letter-spacing: 1px;
		padding: 12px 16px;
		border: 1px solid #ff4d4d40;
		background: #ff4d4d10;
	}

	.submit-btn {
		background: var(--accent);
		color: var(--black);
		border: none;
		padding: 18px 40px;
		font-family: 'Space Mono', monospace;
		font-size: 12px;
		letter-spacing: 2px;
		text-transform: uppercase;
		font-weight: 700;
		cursor: pointer;
		transition:
			transform 0.2s,
			box-shadow 0.2s,
			opacity 0.3s;
		align-self: flex-start;
	}
	.submit-btn:hover:not(:disabled) {
		transform: translate(-2px, -2px);
		box-shadow: 4px 4px 0 rgba(200, 255, 0, 0.25);
	}
	.submit-btn:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	.sending-dots span {
		animation: blink 1.4s infinite;
	}
	.sending-dots span:nth-child(2) {
		animation-delay: 0.2s;
	}
	.sending-dots span:nth-child(3) {
		animation-delay: 0.4s;
	}
	@keyframes blink {
		0%,
		80%,
		100% {
			opacity: 0;
		}
		40% {
			opacity: 1;
		}
	}

	/* Success */
	.success-state {
		text-align: center;
		padding: 60px 0;
	}
	.success-icon {
		font-size: 64px;
		color: var(--accent);
		margin-bottom: 24px;
		font-weight: 700;
	}
	.success-state h3 {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 48px;
		color: var(--white);
		margin-bottom: 16px;
	}
	.success-state p {
		color: var(--text-dim);
		max-width: 360px;
		margin: 0 auto;
		line-height: 1.7;
	}

	/* Sidebar */
	.contact-sidebar {
		display: flex;
		flex-direction: column;
		gap: 1px;
	}
	.sidebar-block {
		background: var(--gray);
		border: 1px solid var(--border);
		padding: 36px;
		margin-bottom: -1px;
	}
	.sb-title {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 28px;
		color: var(--white);
		margin-bottom: 12px;
		letter-spacing: 1px;
	}
	.sb-text {
		font-size: 13px;
		color: var(--text-dim);
		line-height: 1.7;
		margin-bottom: 24px;
	}

	.calendly-btn {
		display: flex;
		align-items: center;
		gap: 10px;
		background: var(--accent);
		color: var(--black);
		padding: 14px 24px;
		font-family: 'Space Mono', monospace;
		font-size: 11px;
		letter-spacing: 1px;
		text-transform: uppercase;
		font-weight: 700;
		transition: transform 0.2s;
	}
	.calendly-btn:hover {
		transform: translate(-2px, -2px);
	}
	.cb-icon {
		font-size: 16px;
	}

	.wa-block {
		border-top: none;
	}
	.wa-cta {
		display: flex;
		align-items: center;
		gap: 10px;
		background: #25d366;
		color: white;
		padding: 14px 24px;
		font-family: 'Space Mono', monospace;
		font-size: 11px;
		letter-spacing: 1px;
		text-transform: uppercase;
		font-weight: 700;
		transition: opacity 0.2s;
	}
	.wa-cta:hover {
		opacity: 0.9;
	}

	.faq-block {
		border-top: none;
	}
	.faq-item {
		border-bottom: 1px solid var(--border);
		padding: 16px 0;
	}
	.faq-item:last-child {
		border-bottom: none;
		padding-bottom: 0;
	}
	summary {
		font-size: 13px;
		color: var(--white);
		cursor: pointer;
		font-weight: 600;
		list-style: none;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 8px;
	}
	summary::after {
		content: '+';
		color: var(--accent);
		font-size: 20px;
		flex-shrink: 0;
		transition: transform 0.3s;
	}
	details[open] summary::after {
		transform: rotate(45deg);
	}
	.faq-item p {
		font-size: 13px;
		color: var(--text-dim);
		line-height: 1.7;
		margin-top: 12px;
	}

	@media (max-width: 1000px) {
		.contact-layout {
			grid-template-columns: 1fr;
		}
		.contact-sidebar {
			flex-direction: row;
			flex-wrap: wrap;
		}
		.sidebar-block {
			flex: 1 1 300px;
		}
		.info-grid {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media (max-width: 600px) {
		.contact-hero {
			padding: 120px 24px 60px;
		}
		.contact-main {
			padding: 60px 24px;
		}
		.form-wrapper {
			padding: 32px 24px;
		}
		.form-row {
			grid-template-columns: 1fr;
		}
		.info-grid {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
