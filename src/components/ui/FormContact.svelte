<script>
  import Saos from "saos";
  import Input from "@ui/Input.svelte";
</script>

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
      <Input value={""} type="text" name="name" placeholder="Name" required />
    </div>
    <div class="mb-6">
      <Input
        value={""}
        type="text"
        name="subject"
        placeholder="Subject"
        required
      />
    </div>
    <div class="mb-6">
      <Input
        value={""}
        type="textarea"
        name="message"
        placeholder="Message"
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
