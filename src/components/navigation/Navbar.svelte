<script>
    import logo from '$lib/assets/logos/Logo Krowen White.png';
    let isOpen = false;
    const links = [
        { id: 1, name: 'Home', href: '/' },
        { id: 2, name: 'About', href: '/about' },
        { id: 3, name: 'Services', href: '/service' },
        { id: 4, name: 'Contact', href: '/contact' },
    ];

    const toggleMenu = () =>  {
        isOpen = !isOpen;
    }
</script>

<nav class="bg-black">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div class="flex items-center justify-between h-18">
            <div class="flex items-center">
                <div class="flex-shrink-0">
                    <img class="h-16 w-16 p-2" alt="The Krowen logo" src={logo} />
                </div>
            </div>
            <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                    {#each links as link (link.id)}
                        <a 
                            href={link.href}
                            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                        {link.name}
                        </a>
                    {/each}
                    <button 
                        type="button" 
                        class="text-white bg-transparent
                         hover:bg-gray-900 focus:outline-none
                         focus:ring-4 focus:ring-gray-300 font-medium 
                         rounded-lg text-sm px-5 py-2.5 me-2 mb-2
                         border-gray-200 border-2 
                         dark:bg-gray-800 dark:hover:bg-gray-700 
                         dark:focus:ring-gray-700 dark:border-gray-00"
                         >
                        Estimar Proyecto
                    </button>
                </div>
            </div>
            <div class="-mr-2 flex md:hidden">
                <button
                    type="button"
                    class="bg-transparent inline-flex items-center 
                        justify-center p-2 rounded-md 
                        text-gray-100 hover:text-white hover:bg-gray-700 
                        focus:outline-none focus:ring-2 focus:ring-offset-2 
                        focus:ring-offset-gray-800 focus:ring-white" 
                    aria-controls="mobile-menu" aria-expanded="false" on:click={toggleMenu}>
                    <span class="sr-only">Open main menu</span>
                    <svg width="22" height="22" 
                        viewBox="0 0 15 15" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" 
                        fill="currentColor" 
                        fill-rule="evenodd" 
                        clip-rule="evenodd"></path>
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
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                {link.name}
                </a>
            {/each}
        </div>
    </div>
</nav>
