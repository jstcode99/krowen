<script>
	import { onMount } from 'svelte';

	let { value = 100, duration = 1200, suffix = '', prefix = '' } = $props();

	let display = $state(0);

	onMount(() => {
		let startTime = 0;

		function animate(time) {
			if (!startTime) startTime = time;

			const progress = Math.min((time - startTime) / duration, 1);
			const eased = 1 - Math.pow(1 - progress, 3);
			display = Math.floor(eased * value);

			if (progress < 1) {
				requestAnimationFrame(animate);
			}
		}

		requestAnimationFrame(animate);
	});
</script>

<span>
	{prefix}{display}{suffix}
</span>
