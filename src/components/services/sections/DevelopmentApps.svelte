<script>
  import appImage from "$lib/assets/sections/development-apps/app-for-brand.png";
  import appImageWebp from "$lib/assets/sections/development-apps/app-for-brand.webp";
</script>

<div
  class="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56 flex flex-wrap gap-x-10 justify-center"
>
  <div class="text-left w-1/2 flex flex-col justify-center items-center">
      <h2 class="text-3xl font-bold tracking-tight dark:text-white sm:text-6xl">
        Desarrollo de <span class="text-k-green">Apps</span> para empresas
      </h2>
    <p class="mt-6 text-lg leading-8 dark:text-gray-400">
      Integramos funcionalidades avanzadas como GPS, pagos en línea,
      notificaciones push y más, para ofrecer una experiencia de usuario
      superior. Nuestras aplicaciones están diseñadas para ser intuitivas,
      seguras y altamente funcionales, garantizando la satisfacción del usuario
      y la fidelidad a tu marca.
    </p>
  </div>
  <div class="flex justify-center mt-10">
    <picture>
      <source srcset={appImageWebp} type="image/webp" />
      <img
        src={appImage}
        class="max-w-72 object-cover h-full sm:w-72 lg:h-full md:w-72 w-96"
        alt="Desarrollo de apps a la medida"
      />
    </picture>
  </div>
</div>
