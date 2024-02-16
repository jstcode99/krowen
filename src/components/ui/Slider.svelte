<script lang="ts">
  import Saos from "saos";

  type Slide = {
    title: string;
    type: string;
    description: string;
    img: string;
    webp: string;
  };

  let currentSlide: number = 0;
  let slides: Slide[];

  const goToSlide = (i: number) => {
    currentSlide = i;
  };

  export { slides };
</script>

<Saos animation={"slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both"}>
  <div class="-mx-4 mt-16 flex overflow-x-auto sm:-mx-6 lg:block">
    <div class="mx-auto max-w-6xl flex flex-wrap justify-center px-4 sm:px-6">
      <div
        class="mt-16 border-t border-gray-200/20 sm:space-x-10 md:grid md:grid-cols-2 md:gap-x-8 md:space-x-6"
      >
        {#each slides as slide, index (index)}
          <button
            type="button"
            on:click={() => goToSlide(index)}
            class="slide-card mt-px flex cursor-pointer
            flex-col gap-4 items-start
            pb-6 pt-4 text-left md:w-[35vw]
            md:pb-16 md:pt-8 lg:w-auto
            border-solid border-t border-transparent hover:border-k-purple transition-opacity duration-300"
            class:opacity-100={index === currentSlide}
            class:opacity-30={index !== currentSlide}
          >
            <span class="text-base font-semibold uppercase leading-7">
              {slide.title}
            </span>
            <h3
              class="text-sm md:order-first md:rounded-full md:px-2 md:text-xs md:font-semibold md:leading-7 bg-k-purple text-white"
            >
              {slide.type}
            </h3>
            <p
              class="mt-2 hidden text-sm leading-6 dark:text-k-gray-light md:block"
            >
              {slide.description}
            </p>
          </button>
        {/each}
      </div>
    </div>
  </div>
</Saos>
<article
  class="w-[100vw] h-screen relative"
>
  {#each slides as slide, index (index)}
    {#if currentSlide === index}
      <div
        transition:blur={{ amount: 10 }}
        class="absolute inset-0 flex justify-center items-center"
      >
        <p class="px-4 text-sm leading-6 sm:px-0 md:hidden">
          {slide.description}
        </p>
        <picture>
          <source srcset={slide.webp} type="image/webp" />
          <img
            on:dragstart|preventDefault
            src={slide.img}
            alt={slide.title}
            class:opacity-100={index === currentSlide}
            class:opacity-30={index !== currentSlide}
            class="mt-10 sm:rounded-3xl md:mt-0 transform duration-300 ease-in-out"
          />
        </picture>
      </div>
    {/if}
  {/each}
</article>
