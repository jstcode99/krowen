<script lang="ts">
	import TagCharp from '@ui/TagCharp.svelte';
import VectorLamp from './../../components/vectors/VectorLamp.svelte';
  const services = [
    { name: "Apps multiplataform", href: "/services#apps-multiplataform" },
    { name: "Web Sites", href: "/services#web-sites" },
    { name: "Prototypes", href: "/services#prototypes" },
    { name: "UI & UX Desing", href: "/services#ui&ux" },
    { name: "Systems for companys", href: "/services#system-for-companys" },
  ];
</script>
<h1 class="sr-only">
    {#each services as service (service.name)}
    {service.name},
  {/each}
</h1>
<div class="h-screen flex justify-center content-center">
    <div class="absolute mt-10 -z-10">
        <VectorLamp />
    </div> 
    <ul class="w-full mt-32">
      {#each services as service (service.name)}
        <li
          class="w-full space-y-1 mt-2 uppercase
          bg-black dark:bg-gray-300
           bg-clip-text text-transparent hover:text-lime-400
           opacity-60 hover:opacity
           ease-in-out duration-300"
        >
          <a href={service.href} 
            class="text-4xl lg:text-6xl md:text-4xl p-4 
            ">
            {service.name}
          </a>
        </li>
      {/each}
    </ul>
</div>
<TagCharp />
