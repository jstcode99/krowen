<script>
  import VectorWhat from "@vectors/VectorWhat.svelte";
</script>

<div class="w-full h-screen px-6 lg:px-8">
  <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 flex flex-col gap-y-5">
    <div class="flex justify-center animate-pulse">
      <VectorWhat />
    </div>
    <div class="text-center">
      <h2 class="text-5xl font-bold tracking-tight dark:text-white sm:text-6xl">
        What are our <span class="text-k-green"></span>?
      </h2>
      <p class="mt-6 text-lg leading-8 dark:text-gray-400">
        Company IT is an agency company that provides professional IT services
        for entrepreneurs and companies around the world.
      </p>
    </div>
    <div class="flex justify-center content-center">
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
  </div>
</div>
