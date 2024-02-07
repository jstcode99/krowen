<script>
  import banner from "$lib/assets/sections/hero/banner.png";
</script>

<section class="relative mt-12">
  <div class="container px-5 py-4 mx-auto flex sm:flex-nowrap flex-wrap">
    <div
      class="lg:w-1/2 md:1/2 sm:w-full flex flex-col justify-center px-12 md:ml-auto w-full md:py-8 mt-8 md:mt-0"
    >
      <div
        class="col-start-1 row-start-1 h-7  mb-3 text-base font-semibold leading-7 text-k-green text-left"
        aria-hidden="true"
      >
        Acompañamiento desde la idea hasta la implementación
      </div>
      <h1
        class="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight sm:text-7xl xl:max-w-[43.5rem] text-left"
      >
        Construya su próxima idea con nostros.
      </h1>
      <p class="col-start-1 row-start-3 mt-4 max-w-lg text-lg text-left">
        Creamos productos digitales que resuelven problemas y generan impacto.
        usando tecnologías modernas y metodologías ágiles. apostamos por la
        calidad y la innovación en las soluciones que ofrecemos.
      </p>
      <div
        class="col-start-1 row-start-4 mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
      >
        <button
          type="button"
          class="text-black dark:text-white
            focus:outline-none focus:ring-4 font-medium
            rounded-lg text-sm px-5 py-2.5 me-2 mb-2
          border-black dark:border-white border-2 hover:scale-105"
        >
          Estimar Proyecto
        </button>
      </div>
    </div>
    <img
      class="hidden lg:flex lg:w-2/3 md:w-1/2 sm:mr-10 p-10  object-cover"
      src={banner}
      alt="Hero mockup"
    />
  </div>
</section>
