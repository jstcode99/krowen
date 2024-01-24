<script>
  const services = [
    { name: "Apps multiplataform", href: "" },
    { name: "Web Sites", href: "" },
    { name: "Prototypes", href: "" },
    { name: "UI & UX Desing", href: "" },
    { name: "Systems for companys", href: "" },
  ];
</script>

<div class="w-full px-6 lg:px-8">
  <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 flex flex-col gap-y-10">
    <div class="text-left">
      <h2 class="text-3xl font-bold tracking-tight dark:text-white sm:text-6xl">
        Offert diferents <span class="text-k-green">benefits</span> for our services
      </h2>
      <p class="mt-6 text-lg leading-8 dark:text-gray-400">
        Lorem ipsum dolor sit amet consectetur. Scelerisque convallis vel
        venenatis euismod. Tristique proin turpis pharetra quam pretium bibendum
        molestie quis. Odio lacus interdum odio sem sed. Sed libero id pretium
        dui non in ornare quam ut.
      </p>
    </div>
    <div class="w-full flex justify-center content-center">
      <ul class="w-full list-none flex flex-col">
        {#each services as service (service.name)}
          <li class="border dark:border-white border-black">
            <a
              href={service.href}
              class="p-4 font-semibold hover:bg-k-green justify-between flex items-center"
            >
              {service.name}
              <span aria-hidden="true" class="no-underline hover:traslate-y-2 text-4xl"></span>
            </a>
          </li>
        {/each}

        <!-- ... -->
      </ul>
    </div>
  </div>
</div>
