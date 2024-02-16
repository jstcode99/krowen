<script lang="ts">
  import MoonIcon from "@icons/MoonIcon.svelte";
  import SunIcon from "@icons/SunIcon.svelte";
  import { darkTheme } from "@store/store";
  import Logo from "@ui/Logo.svelte";

  let isOpen: boolean = false;
  let isDark: boolean = false;

  darkTheme.subscribe((value) => (isDark = value.darkTheme));

  const links = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Servicios", href: "/servicios" },
    { id: 3, name: "Contacto", href: "/contacto" },
  ];

  const toggleMenu = (): void => {
    isOpen = !isOpen;
  };

  const toggleTheme = (): void => {
    darkTheme.toggle();
    isDark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };
</script>

<nav class="bg-white dark:bg-black sticky">
  <div class="max-w-7xl mx-auto px-6 py-4 sm:px-10 lg:px-10">
    <div class="flex items-center justify-between h-18">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <a href="/">
            <Logo />
          </a>
        </div>
      </div>
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-4">
          <!-- Navigation -->
          {#each links as link (link.id)}
            <a
              href={link.href}
              class="hover:bg-gray-700 hover:text-k-green px-3 py-2 rounded-md text-sm font-medium"
            >
              {link.name}
            </a>
          {/each}
          <!-- Theme -->
          <button
            id="theme-toggle"
            type="button"
            on:click={toggleTheme}
            class="text-black dark:text-k-green hover:opacity-80
                focus:outline-none focus:ring-4 rounded-lg text-sm p-2.5"
          >
            {#if isDark}
              <SunIcon />
            {:else}
              <MoonIcon />
            {/if}
          </button>
          <!-- Estimar  -->
          <a
            class="text-black dark:text-white
          focus:outline-none focus:ring-4 font-medium
          rounded-lg text-sm px-5 py-2.5 me-2 mb-2
        border-black dark:border-white border-2 hover:scale-105"
            href="https://calendly.com/krowen/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agenda tu asesoria
          </a>
        </div>
      </div>
      <div class="-mr-2 flex md:hidden">
        <button
          id="theme-toggle"
          type="button"
          on:click={toggleTheme}
          class="text-black dark:text-k-green hover:opacity-80
            focus:outline-none focus:ring-4 rounded-lg text-sm p-2.5"
        >
          {#if isDark}
            <SunIcon />
          {:else}
            <MoonIcon />
          {/if}
        </button>
        <button
          type="button"
          class="bg-transparent inline-flex items-center
                        justify-center p-2 rounded-md
                        hover:text-white hover:bg-gray-700
                        focus:outline-none focus:ring-2 focus:ring-offset-2
                        focus:ring-offset-gray-800 focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          on:click={toggleMenu}
        >
          <span class="sr-only">Open main menu</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>

  <div class={isOpen ? "md:hidden" : "hidden"} id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {#each links as link (link.id)}
        <a
          href={link.href}
          class="hover:bg-gray-700 hover:text-k-green px-3 py-2 rounded-md text-sm font-medium"
        >
          {link.name}
        </a>
      {/each}
    </div>
  </div>
</nav>
