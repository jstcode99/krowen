import nodemailer from 'nodemailer';
import { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const { name, email, company, service, budget, message } = await request.json();

	if (!name || !email || !service || !message) {
		return json({ error: 'Faltan campos requeridos.' }, { status: 400 });
	}

	const html = `
		<div style="font-family:sans-serif;max-width:600px;margin:0 auto">
			<h2 style="color:#c8ff00;background:#000;padding:24px;margin:0">Nuevo contacto — Krowen</h2>
			<table style="width:100%;border-collapse:collapse;margin-top:0">
				<tr style="background:#111">
					<td style="padding:12px 24px;color:#999;font-size:12px;width:140px">Nombre</td>
					<td style="padding:12px 24px;color:#fff;font-size:14px">${name}</td>
				</tr>
				<tr style="background:#1a1a1a">
					<td style="padding:12px 24px;color:#999;font-size:12px">Email</td>
					<td style="padding:12px 24px;font-size:14px"><a href="mailto:${email}" style="color:#c8ff00">${email}</a></td>
				</tr>
				<tr style="background:#111">
					<td style="padding:12px 24px;color:#999;font-size:12px">Empresa</td>
					<td style="padding:12px 24px;color:#fff;font-size:14px">${company || '—'}</td>
				</tr>
				<tr style="background:#1a1a1a">
					<td style="padding:12px 24px;color:#999;font-size:12px">Servicio</td>
					<td style="padding:12px 24px;color:#fff;font-size:14px">${service}</td>
				</tr>
				<tr style="background:#111">
					<td style="padding:12px 24px;color:#999;font-size:12px">Presupuesto</td>
					<td style="padding:12px 24px;color:#fff;font-size:14px">${budget || '—'}</td>
				</tr>
				<tr style="background:#1a1a1a">
					<td style="padding:12px 24px;color:#999;font-size:12px;vertical-align:top">Mensaje</td>
					<td style="padding:12px 24px;color:#fff;font-size:14px;line-height:1.6">${message.replace(/\n/g, '<br>')}</td>
				</tr>
			</table>
			<p style="padding:16px 24px;background:#000;color:#555;font-size:11px;margin:0">
				Enviado desde krowen.co/contacto
			</p>
		</div>
	`;

	const transporter = nodemailer.createTransport({
		host: SMTP_HOST,
		port: Number(SMTP_PORT),
		secure: Number(SMTP_PORT) === 465,
		auth: {
			user: SMTP_USER,
			pass: SMTP_PASS
		}
	});

	await transporter.sendMail({
		to: SMTP_USER,
		from: `"Krowen" <${SMTP_USER}>`,
		replyTo: email,
		subject: `[Krowen] Nuevo contacto de ${name} — ${service}`,
		html
	});

	return json({ ok: true });
};
