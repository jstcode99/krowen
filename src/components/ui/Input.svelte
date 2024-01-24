<script lang="ts">
  let name: string = "";
  let value: string | null = null;
  let type: "text" | "number" | "textarea" = "text";
  let placeholder: string = "";
  let required: boolean = false;

  export { value, name, type, required, placeholder };
</script>

<label for={name} class="text-left capitalize block mb-2 text-sm font-medium text-gray-400">
  {name}
</label>
{#if type == "textarea"}
  <textarea
    rows="4"
    bind:value
    name={name}
    id={name}
    class="text-sm rounded-lg 
        w-full p-2 bg-k-gray
        border-gray-600 placeholder-gray-400 text-white 
        focus:bg-k-gray focus:bg-k-gray-dark"
    {placeholder}
    required={required}
  />
{:else}
  <input
    bind:value
    name={name}
    id={name}
    class="text-sm rounded-lg 
        w-full p-2 bg-k-gray
        border-gray-600 placeholder-gray-400 text-white 
        focus:bg-k-gray focus:bg-k-gray-dark"
    {placeholder}
    required={required}
  />
{/if}
