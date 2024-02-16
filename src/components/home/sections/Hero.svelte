<script>
  import hero from "$lib/assets/sections/hero/hero-home.png";
  import heroWebp from "$lib/assets/sections/hero/hero-home.webp";

  import Saos from "saos";
</script>

<section class="relative xl:mt-16">
  <div
    class="max-w-6xl xl:h-96 sm:h-screen px-5 py-4 mx-auto flex sm:flex-nowrap flex-wrap mb-16"
  >
    <div
      class="lg:absolute md:static mt-16 z-10 w-container flex flex-col justify-center"
    >
      <div class="mb-3 text-xl font-semibold leading-7 text-k-purple text-left">
        Acompañamiento desde la idea hasta la implementación
      </div>
      <Saos
        animation={"tracking-in-contract-bck-bottom 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both"}
      >
        <h1
          class="col-start-1 row-start-2 mt-4 text-4xl font-extrabold tracking-tight sm:text-7xl text-left"
        >
          Desarrolla tus <span class="text-k-purple">ideas</span> <br />con
          nosotros.
        </h1>
      </Saos>
      <Saos
        animation={"tracking-in-contract-bck-bottom 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both"}
      >
        <p class="col-start-1 row-start-3 mt-4 max-w-lg text-lg text-left">
          Creamos productos digitales que resuelven problemas y generan impacto.
          Usamos tecnologías modernas y metodologías ágiles. apostamos por la <br>
          calidad y la innovación en las soluciones que ofrecemos.
        </p>
      </Saos>

      <div
        class="col-start-1 row-start-4 mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
      >
        <a
          href="/contacto"
          class="inline-flex justify-center items-center rounded-lg text-sm font-semibold py-3 px-4 border border-k-purple text-k-purple hover:scale-105"
          ><span
            >Contactar <span class="hidden sm:inline">ahora</span>
            <span>→</span></span
          ></a
        >
      </div>
    </div>
    <div
      class="hidden absolute lg:block xl:block right-[10%] md:right-[-0%] xl:top-0 md:top-[20%] opacity-90"
    >
      <Saos
        animation={"slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both"}
      >
        <picture>
          <source srcset={heroWebp} type="image/webp" />
          <img
            class="object-cover h-full xl:w-[1100px] lg:w-[600px]"
            src={hero}
            alt="Desarrollo tus ideas con nosotros"
          />
        </picture>
      </Saos>
    </div>
  </div>
</section>
