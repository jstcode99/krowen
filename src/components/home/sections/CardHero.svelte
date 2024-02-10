<script>
  import MapLine from "@vectors/VectoMap.svelte";
</script>

<div class="w-full mx-auto px-6 lg:px-8 py-4
  rounded-lg shadow-md">
    <div
      class="flex flex-col justify-center content-center">
      <div class="w-full flex flex-col gap-3 px-5 pb-5 mt-3">
        <a href="/">
            <h6
              class="text-md text-center font-semibold tracking-tight"
            >
              Amas nuestras herramientas?
            </h6>
          </a>
        <a href="/">
          <h5
            class="text-2xl text-center font-semibold tracking-tight"
          >
            Sientete libre de llamarnos o escribirnos a cualquier dia del año.
          </h5>
        </a>

      </div>
      <div class="w-full flex content-center justify-center">
          <div class="p-8 rounded-t-lg">
            <MapLine />
          </div>
      </div>
    </div>
</div>
