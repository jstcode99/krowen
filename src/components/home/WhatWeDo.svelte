<script>
  import VectorWhat from "@vectors/VectorWhat.svelte";

  const beneficios = [
    "Optimizacion para moviles",
    "Diseño moderno y atractivo",
    "Facilidad de uso",
    "Seguridad y confiabilidad",
    "Soporte y mantenimiento",
    "Integracion con sistemas",
    "Tecnologia escalable",
    "Bajo costo en consumo tecnologico",
    "Aliniado a tu marca",
    "Prorizamos tu presupuesto",
  ];
</script>

<div class="mx-auto max-w-screen-xl">
  <div class="mx-auto md:flex items-center px-6 pt-20 md:pt-36">
    <article class="md:w-3/4 md:pr-24 pb-8">
      <div class="flex justify-center animate-pulse">
        <VectorWhat />
      </div>
      <div class="text-center">
        <h2
          class="text-5xl font-bold tracking-tight dark:text-white sm:text-6xl"
        >
          Que Ofrecemos <span class="text-k-green"></span>?
        </h2>
        <p class="mt-6 text-lg leading-8 dark:text-gray-400">
          Somo una empresa de desarrollo de software que ofrece soluciones
          digitales para empresas y emprendedores. Nuestros servicios incluyen: 
          desarrollo de apps, sitios web, prototipos, diseño de UI & UX y sistemas
        </p>
      </div>
      <div class="flex justify-center content-center mt-4">
        <div
          class="relative rounded-full px-3 py-1 text-sm
          leading-6 dark:border border-k-green text-white-400
          ring-1 ring-green-900/10 hover:ring-green-900/20
          hover:scale-110"
        >
          <a href="/" class="font-semibold text-k-green">
            <span aria-hidden="true"></span>
            Check services now.
          </a>
        </div>
      </div>
    </article>
    <article class="flex md:w-2/3">
      <div
        class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 flex flex-col gap-y-10"
      >
        <article class="text-left">
          <h3
            class="text-2xl font-bold tracking-tight dark:text-white"
          >
            <span class="text-k-green">Beneficios</span> de nuestros servicios
          </h3>
          <p class="mt-2 leading-8 dark:text-gray-400">
            La calidad de nuestros servicios es nuestra prioridad. Nuestro
            equipo de profesionales se encarga de ofrecer soluciones de calidad
            usando tecnicas, metodologias y tecnologias modernas.
          </p>
        </article>
        <div class="w-full flex justify-center content-center">
          <ul class="w-full list-none flex flex-col">
            {#each beneficios as beneficio (beneficio)}
              <li class="border-b dark:border-white border-black">
                <span
                  class="p-4 font-semibold hover:bg-k-green justify-between flex items-center"
                >
                  {beneficio}
                  <span
                    aria-hidden="true"
                    class="no-underline hover:traslate-y-2 text-4xl"
                  ></span>
                </span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </article>
  </div>
</div>
