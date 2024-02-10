<script>
  import CloseIcon from "@icons/CloseIcon.svelte";
  import CheckIcon from "@components/icons/CheckIcon.svelte";
  import badUIUX from "$lib/assets/sections/ui-and-ux/bad ui & ux.png";
  import goodUIUX from "$lib/assets/sections/ui-and-ux/good ui & ux.png";


  const typeUiAndUX = [
    {
      title: "Mal UI & UX",
      description:
        "El concepto de la interfaz es confuso y no permite al usuario interactuar de manera eficiente",
      color: "bg-red-500",
      icon: CheckIcon,
      image: badUIUX,
    },
    {
      title: "Buena UI & UX",
      description:
        "El concepto de la interfaz es claro y permite al usuario interactuar de manera eficiente",
      color: "bg-yellow-300",
      icon: CloseIcon,
      image: goodUIUX,
    },
  ];

  const attributes = [
    { img: "", title: "E"},
    { img: "", title: "L"},
    { img: "", title: "E"},
    { img: "", title: "G"},
    { img: "", title: "A"},
    { img: "", title: "N"},
    { img: "", title: "T"},
    { img: "", title: "E"},
  ]
</script>

<div class="mx-auto max-w-screen-xl px-6 md:px-10 py-16 md:py-24">
  <h2
    class="pb-4 text-3xl md:text-6xl font-headline font-black tracking-snug leading-10 md:leading-18 text-center"
  >
    Nos especializamos en la <br />
    <span class="text-k-green">UI & UX</span>
    <br class="hidden lg:block" /> en nuestros desarrollos
  </h2>

  <div
    class="pt-6 lg:pt-12 lg:flex space-y-6 lg:space-y-0 lg:space-x-6 w-full text-center"
  >
    {#each typeUiAndUX as type (type.title)}
      <div
        class="p-6 md:p-10 lg:w-1/2 rounded-xl bg-gradient-to-r from-gray-900 to-black transform origin-center hover:scale-105 hover:bg-gray-700 transition duration-150 ease-in-out"
      >
        <div
          class={`mx-auto flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full ${type.color} text-gray-900`}
        >
          <CheckIcon />
        </div>
        <div class="flex justify-center">
          <div
            class={`mt-3 ${type.color} text-gray-900 px-4 rounded-full font-medium text-sm sm:text-base leading-6 sm:leading-8`}
          >
            {type.title}
          </div>
        </div>
        <h3
          class="pt-6 text-gray-100 font-semibold text-lg md:text-2xl leading-6"
        >
          {type.description}
        </h3>

        <div class="flex justify-center">
          <div class="pt-12 max-w-lg min-h-lg">
            <img src={type.image} alt={type.title} />
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div class="pt-6 flex flex-wrap justify-center gap-x-1">
    {#each attributes as attribute (attribute)}
    <div
      class="p-6 md:p-10 rounded-xl bg-gradient-to-r from-gray-900 to-black transform origin-center hover:scale-105 hover:bg-gray-700 transition duration-150 ease-in-out"
    >
      <!-- <div class={`mb-6 flex items-center h-10 ${attribute.color}`}>
        <svelte:component this={attribute.icon} />
      </div> -->
      <div>
        <h3
          class="pb-1 md:pb-2 text-gray-100 font-semibold text-lg md:text-2xl leading-6"
        >
        {attribute.title}
        </h3>
      </div>
    </div>
    {/each}
  </div>
</div>
