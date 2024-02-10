<script>
  import Input from "@ui/Input.svelte";
  import VectorGlobo from "@vectors/VectorGlobo.svelte";
  import Saos from "saos";
</script>

<div class="w-full px-6 lg:px-8 bg-k-gray-dark">
  <div class="mx-auto max-w-2xl py-32 sm:py-28 lg:py-26 flex flex-col gap-y-5">
    <div class="animate-pulse flex justify-center content-center mb-6">
      <VectorGlobo />
    </div>
    <div class="text-left">
      <Saos
        animation={"slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both"}
      >
        <h2 class="text-5xl font-bold tracking-tight text-white sm:text-6xl">
          Contactanos ahora!
        </h2>
      </Saos>
      <p class="mt-6 text-lg leading-8 text-white">
        Envianos un mensaje y nos pondremos en contacto contigo lo antes 
        posible.
      </p>
    </div>
    <div class="w-full flex justify-center content-center">
      <form class="w-full flex flex-col">
        <Saos
        animation={"slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both"}
      >
        <div class="mb-6">
          <Input
            value={""}
            type="text"
            name="email"
            placeholder="your-email@email.com"
            required
          />
        </div>
        <div class="mb-6">
          <Input
            value={""}
            type="text"
            name="nombre"
            placeholder="nombre"
            required
          />
        </div>
        <div class="mb-6">
          <Input
            value={""}
            type="text"
            name="asunto"
            placeholder="Asunto"
            required
          />
        </div>
        <div class="mb-6">
          <Input
            value={""}
            type="textarea"
            name="mensaje"
            placeholder="mensaje"
            required
          />
        </div>
        <div class="flex items-start mb-6">
          <button
            type="button"
            class="w-full text-k-gray-light dark:text-white
              focus:outline-none focus:ring-4 font-medium
              rounded-lg text-sm px-5 py-2.5 me-2 mb-2
              border-gray-600 placeholder-gray-400
              focus:bg-k-gray focus:bg-k-gray-dark border-2 hover:scale-105"
          >
            Enviar mensaje
          </button>
        </div>
      </Saos>
      </form>
    </div>
  </div>
</div>
