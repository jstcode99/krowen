<script>
  import CheckIcon from "@components/icons/CheckIcon.svelte";
  import VectorWhat from "@vectors/VectorWhat.svelte";
  import Saos from "saos";

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
    <Saos
      animation={"slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both"}
    >
      <article class="md:w-3/4 pb-8">
        <div class="flex justify-center animate-pulse">
          <VectorWhat />
        </div>
        <div class="text-center">
          <h2
            class="text-5xl font-bold tracking-tight sm:text-6xl"
          >
          ¿Que Ofrecemos <span class="text-k-green"></span>?
          </h2>
          <p class="mt-6 text-lg leading-8 dark:text-gray-400">
            Somo una empresa de desarrollo de software que ofrece soluciones
            digitales para empresas y emprendedores. Nuestros servicios
            incluyen <b>Desarrollo de apps, Sitios web, Prototipos, Diseño de UI &
              UX y Sistemas a la medida.</b> 
          </p>
        </div>
        <div class="flex justify-center content-center mt-10">
          <a
            href="https://calendly.com/krowen/30min"
            class="relative rounded-full px-4 py-3 text-sm
            leading-6 dark:border
            ring-1 ring-black
            hover:scale-110 font-semibold"
          >
            Agenda tu asesoria
          </a>
        </div>
      </article>
    </Saos>

    <article class="flex md:w-2/3">
      <div
        class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 flex flex-col gap-y-10"
      >
        <Saos
          animation={"slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both"}
        >
          <article class="text-left">
            <h3 class="text-2xl font-bold tracking-tight dark:text-white">
              <span class="text-k-green">Beneficios</span> de nuestros servicios
            </h3>
            <p class="mt-2 leading-8 dark:text-gray-400">
              La calidad de nuestros servicios es nuestra prioridad. Nuestro
              equipo de profesionales se encarga de ofrecer soluciones de
              calidad usando <b>tecnicas, metodologias y tecnologias modernas.</b>
            </p>
          </article>
          <div class="w-full flex flex-col justify-center content-center">
            <div class="flex flex-wrap items-center pt-5">
              <CheckIcon />
              <h4 class="text-left m-2 font-bold text-md">
                 Beneficios
              </h4>
            </div>
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
        </Saos>
      </div>
    </article>
  </div>
</div>
