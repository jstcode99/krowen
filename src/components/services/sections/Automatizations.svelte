<script>
  import emblem from "$lib/assets/sections/automatizations/emblem.svg";
</script>

<section>
  <div class="hidden lg:block">
    <section class="flex justify-between max-w-[1400px] mx-auto">
      <div class="max-w-3xl relative">
        <h1 class="text-left text-6xl mb-10 mt-12 font-bold">
          Alcanza las metas <span class="block xl:inline text-k-green"
            >automatizando,</span
          >
          y <span class="block xl:inline text-k-green">tecnificando</span> procesos.
        </h1>
        <div class="max-w-[370px] xl:max-w-[428px] mb-8">
          <p class="text-left font-bold mb-4">
            reduce costos en implementacion y<span class="block sm:inline"
              >desarrollo de procesos corporativoss.</span
            >
          </p>
          <p class="text-left mb-4">
            Whether you’re planning to retire soon, or you’re looking for lower
            risk than equities, bonds can be a great way to invest for the next
            few years. Our Automated Bond Portfolio is optimized to your tax
            situation with the added benefit of monthly dividends. Best of all,
            your account stays liquid for more flexibility.
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
            >Trusted clients</span
          >
          <div
            data-testid="accolades-aum-in-billions"
            class="text-3xl font-semibold"
          >
            $50B+
          </div>
          <span data-testid="accolades-subtitle" class="self-start"
            >In assets managed</span
          >
          <div class="text-3xl font-semibold">
            <div class="inline-flex items-baseline space-x-2">
              <span>4.8</span>
            </div>
          </div>
          <span data-testid="accolades-subtitle" class="self-start"
            >Apple App
            <span class="md:whitespace-nowrap">Store <sup>1</sup></span></span
          >
          <div class="text-3xl font-semibold">
            <div class="inline-flex items-baseline space-x-2">
              <span>4.9</span>
            </div>
          </div>
          <span data-testid="accolades-subtitle" class="self-start"
            >Google Play
            <span class="md:whitespace-nowrap">Store <sup>1</sup></span></span
          >
        </div>
        <div
          class="hidden lg:block absolute z-10 top-0 right-[-85%] xl:right-[-70%] 2xl:right-[-55%]"
          style="opacity: 1; transform: none;"
        >
          <picture
            ><source type="image/webp" srcset={''} /><img
              width="450"
              height="736"
              alt="automated bond portfolio mobile app"
              loading="eager"
              src={''}
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
              <p class="text-4xl sm:text-6xl text-white">15.51%</p>
              <p
                class="text-sm sm:text-sm lg:text-sm leading-3 text-white font-bold mb-2"
              >
                De reducion de tiempos en procesos
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
            ><source type="image/webp" srcset={''} /><img
              width="475"
              height="327"
              alt="a city landscape"
              loading="eager"
              src={''}
            /></picture
          >
        </div>
      </div>
    </section>
  </div>
</section>
