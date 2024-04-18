<script lang="ts">

  import referidos from "$lib/assets/sections/recent-works/referidos.png";
  import partner from "$lib/assets/sections/recent-works/partner.png";
  import referidosWebp from "$lib/assets/sections/recent-works/referidos.webp";
  import partnerWebp from "$lib/assets/sections/recent-works/partner.webp";
  import Slider from "@components/ui/Slider.svelte";

  const recenltyWorks = [
    {
      title: "Partner",
      type: "App",
      description: "Aplicación de mensajería instantanea",
      img: partner,
      webp: partnerWebp,
    },
    {
      title: "ReferidosCO",
      type: "App",
      description: "Aplicación de mensajería instantanea",
      img: referidos,
      webp: referidosWebp,
    },
  ];
</script>
<div
  class="mx-auto max-w-screen-2xl px-4 pt-20 pb-16 md:pt-36 sm:px-6 lg:flex lg:px-8 overflow-hidden"
>
  <div class="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
    <article class="flex flex-col gap-4">
      <h2 class="text-base font-semibold leading-7 text-k-purple">
        Trabajos recientes
      </h2>

      <p class="mt-4 text-4xl font-extrabold tracking-tight">
        Construimos aplicaciones y sitios web hermosos como estos.
      </p>
      <p class="mt-4 text-base leading-7">
        Desarrollamos productos siguiendo estandares modernos y con tecnologias
        de punta. nuestras aplicaciones y sitios web son rapidos, intuitivos y
        altamente usables, lo que se traduce en una mejor experiencia para el
        usuario.
      </p>
      <a
        class="text-base font-semibold text-k-purple hover:text-k-gray dark:hover:text-white"
        href="/servicios"
        >Ver catalogo de productos <span aria-hidden="true">→</span></a
      >
    </article>
    <Slider slides={recenltyWorks}  /> 
  </div>
</div>
