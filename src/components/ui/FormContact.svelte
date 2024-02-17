<script lang="ts">
  import Saos from "saos";
  import Input from "@ui/Input.svelte";
  import emailjs from "@emailjs/browser";
  import Toast from "@ui/Toast.svelte";
  import { toast } from "@store/store";

  const form = {
    email: "",
    name: "",
    subject: "",
    message: "",
  };

  const resetForm = () => {
    form.email = "";
    form.name = "";
    form.subject = "";
    form.message = "";
  };

  const handleSubmit = (e: SubmitEvent) => {
    emailjs
      .sendForm("service_hrofcks", "template_5pcv00p", e.target, {
        publicKey: "xUnJaHMgInns7GS1X",
      })
      .then(
        () => {
          toast.success(
            "<b>Genial!</b> Se ha enviado el mensaje a nuestra bandeja."
          );
        },
        (error) => {
          toast.error("<b>Ips!</b>, Intentalo mas tarde.");
        }
      );

    resetForm();
  };
</script>

<form class="w-full flex flex-col" on:submit|preventDefault={handleSubmit}>
  <Toast />
  <Saos
    animation={"slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both"}
  >
    <div class="mb-6">
      <Input
        value={form.email}
        type="text"
        name="email"
        placeholder="tu-email@email.com"
        required
      />
    </div>
    <div class="mb-6">
      <Input
        value={form.name}
        type="text"
        name="name"
        placeholder="Nombre"
        required
      />
    </div>
    <div class="mb-6">
      <Input
        value={form.subject}
        type="text"
        name="subject"
        placeholder="Asunto"
        required
      />
    </div>
    <div class="mb-6">
      <Input
        value={form.message}
        type="textarea"
        name="message"
        placeholder="Mensaje"
        required
      />
    </div>
    <div class="flex items-start mb-6">
      <button
        type="submit"
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
