<script>
    import FormContact from '@ui/FormContact.svelte';
</script>

<main class="flex overflow-hidden">
  <div class="flex-1 hidden lg:block">
    <img
      src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      class="w-full h-screen object-cover"
      alt="Contacto"
    />
  </div>
  <div
    class="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto"
  >
    <div class="max-w-lg flex-1 mx-auto px-4 ">
      <div class="px-2 mb-4">
        <h3 class="text-3xl font-semibold sm:text-4xl">
          Contactanos ahora!
        </h3>
        <p class="mt-5">
          Aqui podras enviarnos tus mensajes y nos pondremos en contacto
        </p>
      </div>
      <FormContact />
    </div>
  </div>
</main>
