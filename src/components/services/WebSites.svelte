<script>
  import CardWebSite from "@components/services/components/CardWebSite.svelte";
  import AdaptativeIcon from "@components/icons/AdaptativeIcon.svelte";
  import EqualizablesIcon from "@components/icons/EqualizablesIcon.svelte";
  import GlobeIcon from "@components/icons/GlobeIcon.svelte";

  const webSites = [
    {
      id: 1,
      name: "Basic",
      summary: "Lorem ipsum dolor sit amet consectetur.",
      subtext: "Lorem ipsum dolor sit amet consectetur.",
      price: 400.0,
      features: [
        "Basic web features",
        "Basic web features",
        "Basic web features",
        "Basic web features",
        "Basic web features",
      ],
    },
    {
      id: 2,
      name: "Standar",
      summary: "Lorem ipsum dolor sit amet consectetur.",
      subtext: "Lorem ipsum dolor sit amet consectetur.",
      price: 600.0,
      features: [
        "Basic web features",
        "Basic web features",
        "Basic web features",
        "Basic web features",
        "Basic web features",
      ],
    },
    {
      id: 3,
      name: "Pro",
      summary: "Lorem ipsum dolor sit amet consectetur.",
      subtext: "Lorem ipsum dolor sit amet consectetur.",
      price: 900.0,
      features: [
        "Basic web features",
        "Basic web features",
        "Basic web features",
        "Basic web features",
        "Basic web features",
      ],
    },
  ];

  const qualities = [
    {
      id: 1,
      icon: AdaptativeIcon,
      title: "Adaptative",
      tags: ["Responsive", "Adaptative", "Adaptative2"],
    },
    {
      id: 2,
      icon: EqualizablesIcon,
      title: "Equalizables",
      tags: ["Responsive", "Adaptative", "Adaptative2"],
    },
    {
      id: 3,
      icon: GlobeIcon,
      title: "Globe",
      tags: ["Responsive", "Adaptative", "Adaptative2"],
    },
  ];
</script>

<div class="w-full px-6 lg:px-8">
  <div class="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56 flex flex-col gap-y-10">
    <div class="text-left">
      <h2 class="text-3xl font-bold tracking-tight dark:text-white sm:text-6xl">
        <span class="text-k-green">Web Site</span> para empresas
      </h2>
      <p class="mt-6 text-lg leading-8 dark:text-gray-400">
        Lorem ipsum dolor sit amet consectetur. Scelerisque convallis vel
        venenatis euismod. Tristique proin turpis pharetra quam pretium bibendum
        molestie quis. Odio lacus interdum odio sem sed. Sed libero id pretium
        dui non in ornare quam ut.
      </p>
    </div>
    <div class="w-full flex flex-wrap justify-center gap-6">
      {#each webSites as webSite (webSite.id)}
        <CardWebSite {webSite} />
      {/each}
    </div>
  </div>
</div>
<section
  class="mx-auto flex max-w-full flex-col
    content-center items-center px-4
    md:px-12 lg:px-16
    bg-gradient-to-r from-gray-900 to-black"
>
  <h2
    class="pt-14 font-bold text-xl text-center text-white sm:pt-20 sm:text-md lg:text-left lg:text-xl 2xl:text-6xl"
  >
    Buscar algo como esto ?
    <span
      class="text-md sm:text-md font-light lg:text-sm 2xl:text-6xl text-white"
      >Conoce nuestros propuestas.</span
    >
  </h2>
  <div class="space-y-10 py-14 sm:pb-20 sm:pt-14 lg:space-y-12">
    <div
      class="grid w-full grid-cols-1 gap-y-5 gap-x-10 sm:gap-y-10 lg:grid-cols-[2fr,4fr] 2xl:gap-x-16"
    >
      {#each qualities as quality (quality.id)}
        <div
          class="flex items-center justify-center gap-x-5 lg:justify-start lg:gap-x-10"
        >
          <div class="text-white">
            <svelte:component this={quality.icon} size={65} />
          </div>
          <p
            class="whitespace-nowrap text-xl font-bold -tracking-[0.02em] text-white sm:text-2xl"
          >
            {quality.title}
          </p>
        </div>
        <div
          class="flex flex-wrap justify-center gap-2 sm:gap-5 lg:justify-start"
        >
          {#each quality.tags as tag (tag)}
            <div
              class="flex max-h-[72px] border border-dashed border-k-green items-center rounded-xl px-6 py-3 bg-gradient-to-b from-gray-900 to-black text-white"
            >
              <p
                class="text-[18px] font-semibold tracking-[0.02em] 2xl:text-[23px]"
              >
                {tag}
              </p>
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</section>
