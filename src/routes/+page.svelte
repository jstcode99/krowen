<script lang="ts">
  import { darkTheme } from "../store/store"
  import { onMount } from 'svelte';

  import Benefits from "../components/home/Benefits.svelte";
  import CardHero from "../components/home/CardHero.svelte";
  import GetInTouch from "../components/home/GetInTouch.svelte";
  import Hero from "../components/home/Hero.svelte";
  import OurApps from "../components/home/OurApps.svelte";
  import WhatWeDo from "../components/home/WhatWeDo.svelte";

  let isDark: boolean = false;

  darkTheme.subscribe((value) => isDark = value.darkTheme)

  onMount(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches || isDark) {
          document.documentElement.classList.add('dark');
          darkTheme.set({ darkTheme: true});
        } else {
          document.documentElement.classList.remove('dark');
          darkTheme.set({ darkTheme: false});
        }
  });
</script>
<Hero/>
<WhatWeDo/>
<Benefits />
<OurApps />
<GetInTouch />
<CardHero />