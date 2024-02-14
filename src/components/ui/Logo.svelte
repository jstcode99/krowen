<script lang="ts">
    import { darkTheme } from "@store/store"
    import light from "$lib/assets/logos/light.png";
    import dark from "$lib/assets/logos/dark.png";
    import lightWebp from "$lib/assets/logos/light.webp";
    import darkWebp from "$lib/assets/logos/dark.webp";

    let isDark: boolean = false;

    darkTheme.subscribe((value) => isDark = value.darkTheme)
</script>

<picture>
    <source srcset={isDark ? lightWebp : darkWebp} type="image/webp">
    <img class="h-16 w-16 p-2"  src={isDark ? light : dark} alt="logo" />
</picture>
