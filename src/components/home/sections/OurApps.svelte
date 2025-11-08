<script>
  const products = [
    {
      title: "Sitema de turnos",
      description:
        "Sistema de turnos, sistema de reservas, sistema de citas <br><br>— Todo lo que tu necesitas para tu negocio.",
    },
    {
      title: "Tiendas en linea",
      description:
        "Tiendas en linea, carritos de compra, vistas de productos <br><br>— Ofrece y vende en linea.",
    },
    {
      title: "Chatbots",
      description:
        "Chatbots, asistentes virtuales, sistemas de mensajeria <br><br>— Contecta con clientes, soporte en linea y embudo de ventas.",
    },
  ];
</script>

<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
  <section class="mx-auto w-full px-4 sm:px-6 lg:px-8">
    <!-- head productos -->
    <article class="flex flex-col gap-y-4">
      <h2 class="text-base font-semibold leading-7 text-center text-k-green">
        Nuestro productos
      </h2>
      <p class="text-4xl font-extrabold">
        Tenemos algunos sistemas para empresas.
      </p>
      <p class="text-base leading-7">
        Nuestros productos son sistemas de gestion empresarial, sistemas de
        control de inventario, sistemas de gestion de recursos humanos y
        sistemas de gestion de proyectos.
      </p>
      <a
        class="text-base font-semibold text-k-green hover:text-black dark:hover:text-white
         mt-2"
        href="/contacto">Cotizar un producto <span>→</span></a
      >
    </article>
    <!-- head productos -->
    <div
      class="mt-16 flex border-t border-gray-200/20 sm:space-x-10 md:grid md:grid-cols-3 md:gap-x-8 md:space-x-0"
    >
      {#each products as product (product)}
        <div
          class="-mt-px pb-6 pt-4 text-left md:pb-10 md:pt-8 border-t border-transparent cursor-pointer hover:border-k-green"
        >
          <h3>
            <button
              class="whitespace-nowrap text-sm font-semibold leading-7 sm:text-base text-k-green"
            >
              {product.title}
            </button>
          </h3>
          <p class="mt-2 hidden text-sm leading-6 md:block">
            {@html product.description}
          </p>
        </div>
      {/each}
    </div>
  </section>
</div>
