<script lang="ts">
    import { darkTheme } from "@store/store"
    import light from "$lib/assets/logos/light.png";
    import dark from "$lib/assets/logos/dark.png";

    let isDark: boolean = false;

    darkTheme.subscribe((value) => isDark = value.darkTheme)
</script>

<img class="h-16 w-16 p-2" alt="The Krowen logo" src={isDark ? light : dark} />
