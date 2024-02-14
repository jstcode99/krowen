<script>
  import app from "$lib/assets/sections/automatizations/app.png";
  import appWebp from "$lib/assets/sections/automatizations/app.webp";
  import Saos from "saos";
</script>

<div class="mx-auto max-w-6xl flex flex-wrap gap-x-10">
  <div
    class="text-left lg:w-6/12 p-4 md:w-full flex flex-col justify-start items-start"
  >
    <Saos
      animation={"slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both"}
    >
      <h1 class="text-left text-6xl mb-10 mt-12 font-bold">
        <span class="block xl:inline text-k-purple">Potencia</span> tu Negocio
        en el
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
          establecidas, nuestro equipo de expertos en desarrollo de aplicaciones
          está aquí para convertir tus ideas en realidad.
        </p>
      </div>
      <a
        class="w-ful justify-center items-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"
        href="/#contact">Iniciar ahora!</a
      >

      <div
        class="text-sm opacity-60 mt-10 grid auto-cols-auto grid-flow-col grid-rows-[auto,auto] items-start gap-x-2 gap-y-2 2xl:gap-x-10"
      >
        <div class="text-3xl font-semibold">700K+</div>
        <span class="self-start">lineas de codigo</span>
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
    </Saos>
  </div>
  <div
    class="lg:w-4/12 md:w-full lg:flex justify-center items-start mt-10 md:mb-26"
  >
    <div class="w-full md:ml-3">
      <div class="block xl:absolute z-10">
        <Saos
          animation={"slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both"}
        >
          <!-- Automatizations img -->

          <picture>
            <source srcset={appWebp} type="image/webp" />
            <img
              src={app}
              class="object-fill h-full w-[1400px] md:w-full"
              alt="potencia tu negocio"
            />
          </picture>
        </Saos>
      </div>
    </div>
  </div>
</div>
