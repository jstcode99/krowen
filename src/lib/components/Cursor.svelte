<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const cursor = document.getElementById('cursor');
		const ring = document.getElementById('cursor-ring');

		if (!cursor || !ring) return;

		const onMove = (e: MouseEvent) => {
			cursor.style.left = e.clientX + 'px';
			cursor.style.top = e.clientY + 'px';
			ring.style.left = e.clientX + 'px';
			ring.style.top = e.clientY + 'px';
		};

		document.addEventListener('mousemove', onMove);
		return () => document.removeEventListener('mousemove', onMove);
	});
</script>
