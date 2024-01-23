<script>
    import WhatWeDo from '$lib/assets/sections/what.svg';

</script>
<div class="w-full h-screen px-6 pt-14 lg:px-8">
  <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 flex flex-col gap-y-10">
    <div class="text-left">
      <h2 class="text-3xl font-bold tracking-tight dark:text-white sm:text-6xl">
        What We Do?
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
    <img src={WhatWeDo} class="h-[300px] animate-pulse" alt="what we do?" />
  </div>
</div>
