<script>
  import appImage from "$lib/assets/sections/development-apps/app-for-brand.png";
  import Saos from "saos";
</script>

<div
  class="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56 flex flex-wrap gap-x-10 justify-center"
>
  <div class="text-left w-1/2 flex flex-col justify-center items-center">
    <Saos
      animation={"slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both"}
    >
      <h2 class="text-3xl font-bold tracking-tight dark:text-white sm:text-6xl">
        Desarrollo de <span class="text-k-green">Apps</span> para empresas
      </h2>
      <p class="mt-6 text-lg leading-8 dark:text-gray-400">
        Integramos funcionalidades avanzadas como GPS, pagos en línea,
        notificaciones push y más, para ofrecer una experiencia de usuario
        superior. Nuestras aplicaciones están diseñadas para ser intuitivas,
        seguras y altamente funcionales, garantizando la satisfacción del
        usuario y la fidelidad a tu marca.
      </p>
    </Saos>
  </div>
  <div class="flex justify-center mt-10">
    <Saos
      animation={"slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both"}
    >
      <img src={appImage} alt="Desarrollo de apps a la medida" />
    </Saos>
  </div>
</div>
