<script>
  import AppleIcon from "@components/icons/AppleIcon.svelte";
  import SendToBackIcon from "@components/icons/SendToBackIcon.svelte";
  import CheckUserIcon from "@components/icons/CheckUserIcon.svelte";
  const integrations = [
    {
      id: 1,
      src: "/images/integrations/react.svg",
      alt: "React",
    },
  ];
  const heros = [
    {
      id: 1,
      src: "",
      alt: "Hero 1",
    },
    {
      id: 2,
      src: "",
      alt: "Hero 2",
    },
    {
      id: 3,
      src: "",
      alt: "Hero 3",
    },
  ];

  const cores = [
    {
      id: 1,
      icon: AppleIcon,
      title: "Lanza mientos en AppStores",
      summary:
        "Alcanza a tus clientes con aplicaciones moviles, y llega a mas lejos que otros con aplicaciones multiplataforma",
    },
    {
      id: 2,
      icon: SendToBackIcon,
      title: "Desarrollamos por segmentos",
      summary:
        "Disenamos sistemas segun la necesidad, buscando ahorra tiempos y costos de desarrollo.",
    },
    {
      id: 3,
      icon: CheckUserIcon,
      title: "Experiencia de usuario",
      summary:
        "La experiencia de usuario es lo mas importante, por eso desarrollamos sistemas faciles de usar.",
    },
  ];
</script>

<div class="h-auto overflow-hidden pt-12 md:pt-[5.75rem]">
  <div class="mx-auto max-w-container px-4 pt-4 sm:px-6 lg:flex lg:px-8">
    <div
      class="relative z-20 mx-auto max-w-[40rem] pb-16 pt-16 lg:mx-0 lg:w-[40rem] lg:max-w-none lg:flex-none lg:pb-24 lg:pr-4 lg:pt-20"
    >
      <h1 class="text-base font-semibold leading-7 text-k-green">
        Aplicacions, Web sites, E-commerce, SEO, Marketing Digital
      </h1>
      <p
        class="mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl sm:leading-[3.5rem]"
      >
        Desarrollamos proctos con diferentes integraciones
      </p>
      <div class="flex flex-wrap gap-6 mt-4">
        {#each integrations as integration (integration.id)}
          <div class="flex items-center text-sm font-medium">
            <span class="ml-2.5">{integration.alt}</span>
          </div>
        {/each}
      </div>
      <p class="mt-4 text-base leading-7">
        Entregamos proyectos con las integraciones que necesitas para alcanzar a
        tus clientes, desde pagos, embudos de ventas, e-mail marketing, SEO, y
        mucho mas.
      </p>
      <div class="mt-8 flex justify-center gap-4">
        <a
          href="#browse"
          class="inline-flex justify-center items-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"
          ><span
            >Contactar <span class="hidden sm:inline">ahora</span>
            <span aria-hidden="true">→</span></span
          ></a
        >
      </div>
    </div>
    <div class="relative z-10 hidden lg:block">
      <div class="mt-6 flex">
        {#each heros as hero (hero.id)}
          <div class="relative flex-shrink-0 p-4">
            <div
              class="relative z-10 overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5"
            >
              <img class="h-[404px] w-[336px]" src={hero.src} alt={hero.alt} />
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
  <div class="relative z-20 sm:z-auto">
    <div class="mx-auto max-w-container px-4 pb-16 sm:px-6 lg:px-8">
      <div
        class="relative mx-auto grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
      >
        {#each cores as core (core.id)}
          <div class="flex">
            <div class="p-0.5 text-k-green">
              <svelte:component this={core.icon} size={35} />
            </div>
            <div class="ml-6">
              <h2 class="text-sm font-semibold leading-6 text-k-green">
                {core.title}
              </h2>
              <p class="mt-2 text-sm leading-6">
                {core.summary}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
  <div
    class="pointer-events-none absolute inset-0 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.06)]"
  />
</div>
