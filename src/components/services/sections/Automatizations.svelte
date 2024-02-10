<script>
  import Emblem from "@components/icons/Emblem.svelte";
  import heroBack from "$lib/assets/sections/automatizations/hero-back.png";
  import app from "$lib/assets/sections/automatizations/app.png";
</script>

<div class="mx-auto max-w-6xl flex flex-wrap gap-x-10">
  <div class="text-left lg:w-6/12 p-4 md:w-full flex flex-col justify-start items-start">
    <h1 class="text-left text-6xl mb-10 mt-12 font-bold">
      <span class="block xl:inline text-k-purple">Potencia</span> tu Negocio en
      el
      <span class="block xl:inline text-k-purple"> Mundo Digital!</span>
    </h1>
    <div class="mb-8">
      <p class="text-left font-bold mb-4">
        Reduce costos en implementacion y <span class="block sm:inline">
          corporativos.</span
        >
      </p>
      <p class="text-left mb-4">
        En el panorama empresarial actual, tener una presencia móvil sólida es
        crucial para alcanzar el éxito. En
        <span class="block xl:inline text-k-purple">krowen</span> , ofrecemos servicios
        de desarrollo de aplicaciones personalizadas para empresas, diseñadas para
        impulsar tu crecimiento y eficiencia. Desde startups emergentes hasta corporaciones
        establecidas, nuestro equipo de expertos en desarrollo de aplicaciones está
        aquí para convertir tus ideas en realidad.
      </p>
    </div>
    <a
      class="w-ful justify-center items-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"
      href="/#contact">Iniciar ahora!</a
    >

    <div
      class="text-sm opacity-60 mt-10 grid auto-cols-auto grid-flow-col grid-rows-[auto,auto] items-start gap-x-2 gap-y-2 2xl:gap-x-10"
    >
      <div class="text-3xl font-semibold">
        700K+
      </div>
      <span class="self-start"
        >lineas de codigo</span
      >
      <div class="text-3xl font-semibold">
        <div class="inline-flex items-baseline space-x-2">
          <span>5.8</span>
        </div>
      </div>
      <span class="self-start"
        >Anos de
        <span class="md:whitespace-nowrap">Experiencia</span></span
      >
    </div>
  </div>
  <div class="lg:w-4/12 md:w-full md:hidden lg:flex justify-center mt-10 md:mb-26">
    <div class="w-full md:ml-3">
      <div
        class="absolute z-10"
      >
        <img src={app} class="object-fill h-full w-[1400px]  md:w-full" alt="potencia tu negocio" />
      </div>
      <div
        class="relative top-[65%] xl:top-[60%] z-20"
      >
        <div class="relative">
          <div
            class="absolute top-16 left-14 text-center"
            data-testid="hero-star-content"
          >
            <p class="text-4xl sm:text-6xl text-white">15%</p>
            <p
              class="text-sm sm:text-sm lg:text-sm leading-3 text-white font-bold mb-2"
            >
              De reducion de costo <br>
              que otras empresas
            </p>
          </div>
          <div class="block text-k-purple">
            <Emblem />
          </div>
        </div>
      </div>
    </div>
    <div class="absolute -mr-24 2xl:mr-0 xl:right-[10%] md:left-[50%]">
      <img src={heroBack} class="object-fill h-full w-[500px]" alt="hero" />
    </div>
  </div>
</div>
