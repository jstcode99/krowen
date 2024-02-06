<script lang="ts">
  import CircleCheckIcon from "@icons/CircleCheckIcon.svelte";

  interface IWebSite {
    id: number;
    name: string;
    summary: string;
    subtext: string;
    price: number;
    features: string[];
  }
  let webSite: IWebSite | null = null;
  let rotatation = 0;
  
  export { webSite, rotatation };
</script>

<article
  id={"card-website" + webSite?.id}
  class={`w-[280px] h-[580px] px-6 py-8 origin-top-left
    bg-gradient-to-b from-gray-900 to-black
    rounded-md shadow border
  border-slate-400 flex-col justify-center content-start
    gap-2 inline-flex cursor-pointer rotate-[${rotatation}deg] 
    hover:scale-105 transform-gpu hover:border-k-green`}
>
  <div class="flex flex-col justify-start items-start gap-y-4 p-2">
    <h1 class="text-white text-md font-bold capitalize">
      Web site <span class="text-k-green">{webSite?.name}</span>
    </h1>
    <div class="w-md text-white text-sm font-normal">
      {webSite?.summary}
    </div>
  </div>
  <div class="w-full flex flex-col justify-start items-start gap-2">
    <span class="w-full text-white text-3xl font-extrabold text-center">${webSite?.price}</span>
    <div class="w-full flex justify-center items-center">
      <button
        type="button"
        class="text-white dark:text-white
            focus:outline-none focus:ring-4 font-medium
            rounded-lg text-sm px-6 py-2 mt-2 mb-2
          border-white border-2 hover:scale-105"
      >
        Comprar ahora!
      </button>
    </div>
    <h3 class="text-white text-sm font-semibold">Great for</h3>
    <p class="text-left text-gray-400 text-xs font-normal">
      {webSite?.subtext}
    </p>
  </div>
  <div class="flex-col justify-start items-start gap-4 flex">
    <h4 class="text-white text- font-semibold">Basic web features</h4>
    <div class="justify-center items-center gap-2 inline-flex">
      <ul
        class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400"
      >
        {#each webSite?.features ?? [] as feature}
          <li class="flex items-center gap-x-2 text-sm">
            <CircleCheckIcon />
            {feature}
          </li>
        {/each}
      </ul>
    </div>
  </div>
</article>
