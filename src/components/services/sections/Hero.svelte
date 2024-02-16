<script>
  import CRMIcon from "@components/icons/CRMIcon.svelte";
  import OpenAIIcon from "@components/icons/OpenAIIcon.svelte";
  import WhatsappIcon from "@components/icons/WhatsappIcon.svelte";
  import NequiIcon from "@components/icons/NequiIcon.svelte";
  import InstagramIcon from "@components/icons/InstagramIcon.svelte";
  import FacebookIcon from "@components/icons/FacebookIcon .svelte";
  import GoogleIcon from "@components/icons/GoogleIcon.svelte";
  import AppleIcon from "@components/icons/AppleIcon.svelte";
  import SendToBackIcon from "@components/icons/SendToBackIcon.svelte";
  import CheckUserIcon from "@components/icons/CheckUserIcon.svelte";
  import PaypalIcon from "@components/icons/PaypalIcon.svelte";
  import Saos from "saos";
  import landing1 from "$lib/assets/sections/hero/landing-1.png";
  import landing2 from "$lib/assets/sections/hero/landing-2.png";
  import landing3 from "$lib/assets/sections/hero/landing-3.png";

  import landing1Webp from "$lib/assets/sections/hero/landing-1.webp";
  import landing2Webp from "$lib/assets/sections/hero/landing-2.webp";
  import landing3Webp from "$lib/assets/sections/hero/landing-3.webp";
  const integrations = [
    {
      icon: GoogleIcon,
      name: "Google",
    },
    {
      icon: FacebookIcon,
      name: "Facebook",
    },
    {
      icon: InstagramIcon,
      name: "Instagram",
    },
    {
      icon: PaypalIcon,
      name: "Paypal",
    },
    {
      icon: NequiIcon,
      name: "Nequi",
    },
    {
      icon: CRMIcon,
      name: "CRM",
    },
    {
      icon: WhatsappIcon,
      name: "WhatsApp",
    },
    {
      icon: OpenAIIcon,
      name: "Open AI",
    },
  ];
  const heros = [
    {
      id: 1,
      src: landing1,
      webp: landing1Webp,
      alt: "Hero 1",
    },
    {
      id: 2,
      src: landing2,
      webp: landing2Webp,
      alt: "Hero 2",
    },
    {
      id: 3,
      src: landing3,
      webp: landing3Webp,
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
  <div
    class="mx-auto max-w-container flex flex-wrap justify-center px-4 sm:px-6 lg:flex lg:px-8"
  >
    <div
      class="relative z-20 mx-auto max-w-[40rem] pb-16 pt-8 lg:mx-0 lg:w-[40rem] lg:max-w-none lg:flex-none lg:pb-24 lg:pr-4 lg:pt-18"
    >
      <h1 class="text-base font-semibold leading-7 text-k-green">
        Aplicacions, Web sites, E-commerce, SEO, Marketing Digital
      </h1>
      <Saos
        animation={"slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both"}
      >
        <p
          class="mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl sm:leading-[3.5rem]"
        >
          Desarrollamos proctos con diferentes integraciones
        </p>
      </Saos>

      <Saos animation={"bounce-in-top 1.5s both"}>
        <div class="flex flex-wrap justify-center gap-2 mt-4">
          {#each integrations as integration (integration)}
            <div
              class="flex items-center text-sm font-medium cursor- border border-gray-400 rounded-lg hover:scale-105 duration-300 hover:shadow-sm transform-gpu"
            >
              <div class="mx-2 my-2">
                <svelte:component this={integration.icon} size={35} />
              </div>
              <span class="me-2">{integration.name}</span>
            </div>
          {/each}
        </div>
      </Saos>

      <p class="mt-4 text-base leading-7">
        Entregamos proyectos con las integraciones que necesitas para alcanzar a
        tus clientes, desde pagos, embudos de ventas, e-mail marketing, SEO, y
        mucho mas.
      </p>
      <div class="mt-8 flex justify-center gap-4">
        <a
          href="/contacto"
          class="inline-flex justify-center items-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"
          ><span
            >Contactar <span class="hidden sm:inline">ahora</span>
            <span aria-hidden="true">→</span></span
          ></a
        >
      </div>
    </div>
    <Saos
      animation={"slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both"}
    >
      <div class="hidden mt-8 lg:block">
        <div class="mt-12 flex gap-2">
          {#each heros as hero (hero.id)}
            <div
              class="relative flex-shrink-0 p-4 inline-flex h-full animate-background-shine cursor-pointer items-center rounded justify-center border border-gray-800 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] text-xs font-medium text-gray-300"
            >
              <div
                class="relative z-10 overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5"
              >
                <picture>
                  <source srcset={hero.webp} type="image/webp" />
                  <img class="h-[404px] w-[336px]" src={hero.src} alt="logo" />
                </picture>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </Saos>
  </div>
  <div class="relative z-20 sm:z-auto">
    <div class="mx-auto max-w-container px-4 pb-16 sm:px-6 lg:px-4">
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
