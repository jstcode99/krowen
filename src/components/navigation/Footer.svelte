<script>
    import Logo from '@ui/Logo.svelte';


    const links = [
        { id: 1, name: 'Home', href: '/' },
        { id: 2, name: 'About', href: '/about' },
        { id: 3, name: 'Services', href: '/service' },
        { id: 4, name: 'Contact', href: '/contact' },
    ];
</script>
<footer class="w-full mx-auto bg-gray-200 shadow dark:bg-black">
    <div class="w-full max-w-2xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <Logo/>
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Krowen
                </span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                {#each links as link (link.id)}
                    <li 
                        class="hover:underline"
                    >
                        <a  href={link.href} 
                            class="hover:underline me-4 md:me-6"
                        >
                            {link.name}
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <a href="/" class="hover:underline">Krowen™</a>. All Rights Reserved.</span>
    </div>
</footer>

