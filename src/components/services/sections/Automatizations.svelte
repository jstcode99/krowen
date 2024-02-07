<script>
  import emblem from "$lib/assets/sections/automatizations/emblem.svg";
  import hero from "$lib/assets/sections/automatizations/hero-back.png";
  import app from "$lib/assets/sections/automatizations/app.png";

</script>

<section>
  <div class="hidden lg:block">
    <section class="flex justify-between max-w-[1400px] mx-auto">
      <div class="max-w-3xl relative">
        <h1 class="text-left text-6xl mb-10 mt-12 font-bold">
          Desarrollamos Aplicaciones Empresariales: <span class="block xl:inline text-k-green"
            >Potencia tu Negocio</span> en el
          <span class="block xl:inline text-k-green"> Mundo Digital!</span>
        </h1>
        <div class="max-w-[370px] xl:max-w-[428px] mb-8">
          <p class="text-left font-bold mb-4">
            Reduce costos en implementacion y <span class="block sm:inline"
              > corporativos.</span
            >
          </p>
          <p class="text-left mb-4">
            En el panorama empresarial actual, tener una presencia móvil sólida es crucial para alcanzar el éxito. En 
            <span class="block xl:inline text-k-green"
            >krowen</span> , ofrecemos servicios de desarrollo de aplicaciones personalizadas para empresas, diseñadas para impulsar tu crecimiento y eficiencia. Desde startups emergentes hasta corporaciones establecidas, nuestro equipo de expertos en desarrollo de aplicaciones está aquí para convertir tus ideas en realidad.
          </p>
        </div>
        <div class="w-full flex justify-start">
          <a
            class="w-1/4 justify-center items-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"
            href="/#contact">Iniciar ahora!</a
          >
        </div>

        <div
          class="text-sm opacity-60 mt-10 grid auto-cols-auto grid-flow-col grid-rows-[auto,auto] items-center gap-x-6 gap-y-2 2xl:gap-x-10"
        >
          <div
            data-testid="accolades-num-clients"
            class="text-3xl font-semibold"
          >
            700K+
          </div>
          <span data-testid="accolades-subtitle" class="self-start"
            >lineas de codigo</span
          >
          <div
            data-testid="accolades-aum-in-billions"
            class="text-3xl font-semibold"
          >
            3
          </div>
          <span data-testid="accolades-subtitle" class="self-start"
            >Productos & Servicios</span
          >
          <div class="text-3xl font-semibold">
            <div class="inline-flex items-baseline space-x-2">
              <span>5.8</span>
            </div>
          </div>
          <span data-testid="accolades-subtitle" class="self-start"
            >Anos de
            <span class="md:whitespace-nowrap">Experiencia</span></span
          >
          <div class="text-3xl font-semibold">
            <div class="inline-flex items-baseline space-x-2">
              <span>4</span>
            </div>
          </div>
          <span data-testid="accolades-subtitle" class="self-start"
            >Proyectos
            <span class="md:whitespace-nowrap">desplegados</span></span
          >
        </div>
        <div
          class="hidden lg:block absolute z-10 top-0 right-[-85%] xl:right-[-70%] 2xl:right-[-55%]"
          style="opacity: 1; transform: none;"
        >
          <picture
            ><source type="image/webp" srcset={app} /><img
              width="450"
              height="736"
              alt="automated bond portfolio mobile app"
              loading="eager"
              src={app}
            />
          </picture>
        </div>
        <div
          class="absolute right-[-90%] xl:right-[-80%] 2xl:right-[-65%] top-[65%] xl:top-[70%] z-20"
          style="opacity: 1; transform: none;"
        >
          <div class="relative">
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
              data-testid="hero-star-content"
            >
              <p class="text-4xl sm:text-6xl text-white">15%</p>
              <p
                class="text-sm sm:text-sm lg:text-sm leading-3 text-white font-bold mb-2"
              >
                De reducion de costo que otras empresas
              </p>
            </div>
            <div class="sm:hidden">
              <img
                width="200"
                height="200"
                alt="star"
                loading="eager"
                src={emblem}
              />
            </div>
            <div class="hidden sm:block">
              <img
                width="250"
                height="250"
                alt="star"
                loading="eager"
                src={emblem}
              />
            </div>
          </div>
        </div>
      </div>
      <div class="grow relative -mr-24 2xl:mr-0">
        <div class="absolute right-0 top-[30%]">
          <picture
            ><source type="image/webp" srcset={hero} /><img
              width="475"
              height="327"
              alt="a city landscape"
              loading="eager"
              src={hero}
            /></picture
          >
        </div>
      </div>
    </section>
  </div>
</section>
