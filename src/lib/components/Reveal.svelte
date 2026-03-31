<script lang="ts">
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';

	let observer: IntersectionObserver | null = null;

	function setup() {
		observer?.disconnect();
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) (e.target as HTMLElement).classList.add('visible');
				});
			},
			{ threshold: 0.12 }
		);
		document.querySelectorAll('.reveal').forEach((el) => observer!.observe(el));
	}

	afterNavigate(setup);

	onMount(() => () => observer?.disconnect());
</script>
