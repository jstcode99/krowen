<script lang="ts">
  import CircleCheckIcon from "@icons/CircleCheckIcon.svelte";

  interface IWebSite {
    id: number;
    name: string;
    summary: string;
    subtext: string;
    price: number;
    features: string[];
    link: string;
  }
  let webSite: IWebSite | null = null;
  let rotatation = 0;

  export { webSite, rotatation };
</script>

<article
  id={"card-website" + webSite?.id}
  class={`w-[280px] px-6 py-8 origin-top-left
    bg-gradient-to-b from-gray-900 to-black
    rounded-md shadow border
  border-slate-400 flex-col content-start
    gap-2 inline-flex cursor-pointer rotate-[${rotatation}deg] 
    hover:scale-105 duration-300 hover:shadow-sm transform-gpu hover:border-k-green`}
>
  <div class="flex flex-col justify-start gap-y-4 p-2">
    <h1 class="text-white text-md font-bold capitalize">
      Web site <span class="text-k-green">{webSite?.name}</span>
    </h1>
    <div class="w-md text-white text-sm font-normal text-left">
      {webSite?.summary}
    </div>
  </div>
  <div class="w-full flex flex-col justify-start gap-2">
    <span class="w-full text-white text-3xl font-extrabold text-center"
      >${webSite?.price}</span
    >
    <div class="w-full flex justify-center items-center">
      <a
      target="_blank"
        href={webSite?.link}
        class="text-white dark:text-white
            focus:outline-none focus:ring-4 font-medium
            rounded-lg text-sm px-6 py-2 mt-2 mb-2
          border-white border-2 hover:scale-105"
      >
        Comprar ahora!
    </a>
    </div>
    <h3 class="text-white text-sm font-semibold">Hechas para</h3>
    <p class="text-left text-gray-400 text-xs font-normal">
      {webSite?.subtext}
    </p>
  </div>
  <div class="flex-col justify-start items-start gap-4 flex">
    <h4 class="text-white text- font-semibold">Basic web features</h4>
    <div class="justify-center items-center gap-2 inline-flex">
      <nav class="flex flex-col sm:items-start sm:text-left text-center text-white text-sm items-center -mb-1 space-y-2.5">
        {#each webSite?.features ?? [] as feature}
            <a>
              <span class="text-k-green w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <CircleCheckIcon />
              </span>
              {feature}
            </a>
        {/each}
      </nav>
    </div>
  </div>
</article>
