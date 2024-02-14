<script>
  import referidos from "$lib/assets/sections/recent-works/referidos.png";
  import partner from "$lib/assets/sections/recent-works/partner.png";

  import referidosWebp from "$lib/assets/sections/recent-works/referidos.webp";
  import partnerWebp from "$lib/assets/sections/recent-works/partner.webp";
  import Saos from "saos";

  const recenltyWorks = [
    {
      title: "Partner",
      type: "App",
      description: "Aplicación de mensajería instantanea",
      img: partner,
      webp: referidosWebp
    },
    {
      title: "ReferidosCO",
      type: "App",
      description: "Aplicación de mensajería instantanea",
      img: referidos,
      webp: partnerWebp
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
        Construimos aplicaciones y sitios web hermosos, como estos.
      </p>
      <p class="mt-4 text-base leading-7">
        Desarrollamos productos siguiendo estandares modernos y con tecnologias
        de punta. nuestras aplicaciones y sitios web son rapidos, intuitivos y
        altamente usables, lo que se traduce en una mejor experiencia para el
        usuario.
      </p>
      <a
        class="text-base font-semibold text-k-purple hover:text-k-gray"
        href="/templates"
        >Ver catalogo de productos <span aria-hidden="true">→</span></a
      >
    </article>
    <Saos
      animation={"slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both"}
    >
      <div class="-mx-4 mt-16 flex overflow-x-auto sm:-mx-6 lg:block">
        <div
          class="mx-auto max-w-6xl flex flex-wrap justify-center px-4 sm:px-6"
        >
          <div
            class="mt-16 border-t border-gray-200/20 sm:space-x-10 md:grid md:grid-cols-2 md:gap-x-8 md:space-x-6"
          >
            {#each recenltyWorks as recenltyWork (recenltyWork)}
              <aside
                class="mt-px flex cursor-pointer
            flex-col gap-4 items-start
            pb-6 pt-4 text-left md:w-[35vw]
            md:pb-16 md:pt-8 lg:w-auto
            border-solid border-t border-transparent hover:border-k-purple
            opacity-30 hover:opacity-100 transition-opacity duration-300"
              >
                <span class="text-base font-semibold uppercase leading-7">
                  {recenltyWork.title}
                </span>
                <h3
                  class="text-sm md:order-first md:rounded-full md:px-2
              md:text-xs md:font-semibold md:leading-7 bg-k-purple text-white"
                >
                  {recenltyWork.type}
                </h3>
                <p
                  class="mt-2 hidden text-sm leading-6 dark:text-k-gray-light md:block"
                >
                  {recenltyWork.description}
                </p>
              </aside>
            {/each}
          </div>
        </div>
      </div>
    </Saos>
    <div
      class="-mx-2 flex transition-transform duration-500"
      style="transform: translateX(0%);"
    >
      {#each recenltyWorks as recenltyWork (recenltyWork)}
        <div class="w-full flex-none sm:px-4">
          <p class="px-4 text-sm leading-6 sm:px-0 md:hidden">
            {recenltyWork.description}
          </p>
          <picture>
            <source srcset={recenltyWork.webp} type="image/webp" />
            <img
              src={recenltyWork.img}
              alt={recenltyWork.title}
              class="mt-10 aspect-[1216/640] sm:rounded-3xl md:mt-0"
            />
          </picture>
        </div>
      {/each}
    </div>
  </div>
</div>
