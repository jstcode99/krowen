<script>
  import CloseIcon from "./../icons/CloseIcon.svelte";
  import CheckIcon from "@components/icons/CheckIcon.svelte";
  import badUIUX from "$lib/assets/sections/ui-and-ux/bad ui & ux.png";
  import goodUIUX from "$lib/assets/sections/ui-and-ux/good ui & ux.png";

  const typeUiAndUX = [
    {
      title: "Mal UI & UX",
      description:
        "El concepto de la interfaz es confuso y no permite al usuario interactuar de manera eficiente",
      color: "bg-red-500",
      icon: CheckIcon,
      image: badUIUX,
    },
    {
      title: "Buena UI & UX",
      description:
        "El concepto de la interfaz es claro y permite al usuario interactuar de manera eficiente",
      color: "bg-yellow-300",
      icon: CloseIcon,
      image: goodUIUX,
    },
  ];
</script>

<div class="mx-auto max-w-screen-xl px-6 md:px-10 py-16 md:py-24">
  <h2
    class="pb-4 text-3xl md:text-6xl font-headline font-black tracking-snug leading-10 md:leading-18 text-center"
  >
    Nos especializamos en la <br />
    <span class="text-k-green">UI & UX</span>
    <br class="hidden lg:block" /> en nuestros desarrollos
  </h2>

  <div
    class="pt-6 lg:pt-12 lg:flex space-y-6 lg:space-y-0 lg:space-x-6 w-full text-center"
  >
    {#each typeUiAndUX as type (type.title)}
      <div
        class="p-6 md:p-10 lg:w-1/2 rounded-xl bg-gray-800 transform origin-center hover:scale-105 hover:bg-gray-700 transition duration-150 ease-in-out"
      >
        <div
          class={`mx-auto flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full ${type.color} text-gray-900`}
        >
          <CheckIcon />
        </div>
        <div class="flex justify-center">
          <div
            class={`mt-3 ${type.color} text-gray-900 px-4 rounded-full font-medium text-sm sm:text-base leading-6 sm:leading-8`}
          >
            {type.title}
          </div>
        </div>
        <h3
          class="pt-6 text-gray-100 font-semibold text-lg md:text-2xl leading-6"
        >
          {type.description}
        </h3>

        <div class="flex justify-center">
          <div class="pt-12 max-w-lg min-h-lg">
            <img src={type.image} alt={type.title} />
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div class="pt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      class="p-6 md:p-10 rounded-xl bg-gray-800 transform origin-center hover:scale-105 hover:bg-gray-700 transition duration-150 ease-in-out"
    >
      <div class="mb-6 flex items-center h-10 text-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-layers"
          ><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline
            points="2 17 12 22 22 17"
          ></polyline><polyline points="2 12 12 17 22 12"></polyline></svg
        >
      </div>
      <div>
        <h3
          class="pb-1 md:pb-2 text-gray-100 font-semibold text-lg md:text-2xl leading-6"
        >
          Calendar overlay
        </h3>
        <p class="text-gray-400 md:text-lg">
          No need to switch back and forth between screens any more.
        </p>
      </div>
    </div>
    <div
      class="p-6 md:p-10 rounded-xl bg-gray-800 transform origin-center hover:scale-105 hover:bg-gray-700 transition duration-150 ease-in-out"
    >
      <div class="mb-6 flex items-center h-10 text-pink-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-at-sign"
          ><circle cx="12" cy="12" r="4"></circle><path
            d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"
          ></path></svg
        >
      </div>
      <div>
        <h3
          class="pb-1 md:pb-2 text-gray-100 font-semibold text-lg md:text-2xl leading-6"
        >
          Prefill recipient info
        </h3>
        <p class="text-gray-400 md:text-lg">
          Save the scheduler time by prefilling their info.
        </p>
      </div>
    </div>
    <div
      class="p-6 md:p-10 rounded-xl bg-gray-800 transform origin-center hover:scale-105 hover:bg-gray-700 transition duration-150 ease-in-out"
    >
      <div class="mb-6 flex items-center h-10 text-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-sliders"
          ><line x1="4" y1="21" x2="4" y2="14"></line><line
            x1="4"
            y1="10"
            x2="4"
            y2="3"
          ></line><line x1="12" y1="21" x2="12" y2="12"></line><line
            x1="12"
            y1="8"
            x2="12"
            y2="3"
          ></line><line x1="20" y1="21" x2="20" y2="16"></line><line
            x1="20"
            y1="12"
            x2="20"
            y2="3"
          ></line><line x1="1" y1="14" x2="7" y2="14"></line><line
            x1="9"
            y1="8"
            x2="15"
            y2="8"
          ></line><line x1="17" y1="16" x2="23" y2="16"></line></svg
        >
      </div>
      <div>
        <h3
          class="pb-1 md:pb-2 text-gray-100 font-semibold text-lg md:text-2xl leading-6"
        >
          Ranked availability
        </h3>
        <p class="text-gray-400 md:text-lg">
          Present your preferred availability instead of just all your
          availability.
        </p>
      </div>
    </div>
    <div
      class="p-6 md:p-10 rounded-xl bg-gray-800 transform origin-center hover:scale-105 hover:bg-gray-700 transition duration-150 ease-in-out"
    >
      <div class="mb-6 flex items-center h-10 text-purple-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-pause-circle"
          ><circle cx="12" cy="12" r="10"></circle><line
            x1="10"
            y1="15"
            x2="10"
            y2="9"
          ></line><line x1="14" y1="15" x2="14" y2="9"></line></svg
        >
      </div>
      <div>
        <h3
          class="pb-1 md:pb-2 text-gray-100 font-semibold text-lg md:text-2xl leading-6"
        >
          Limit scheduling frequency
        </h3>
        <p class="text-gray-400 md:text-lg">
          Cap meetings per day, week, and month.
        </p>
      </div>
    </div>
    <div
      class="p-6 md:p-10 rounded-xl bg-gray-800 transform origin-center hover:scale-105 hover:bg-gray-700 transition duration-150 ease-in-out"
    >
      <div class="mb-6 flex items-center h-10 text-orange-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-git-branch"
          ><line x1="6" y1="3" x2="6" y2="15"></line><circle
            cx="18"
            cy="6"
            r="3"
          ></circle><circle cx="6" cy="18" r="3"></circle><path
            d="M18 9a9 9 0 0 1-9 9"
          ></path></svg
        >
      </div>
      <div>
        <h3
          class="pb-1 md:pb-2 text-gray-100 font-semibold text-lg md:text-2xl leading-6"
        >
          Per-link calendar settings
        </h3>
        <p class="text-gray-400 md:text-lg">
          Route different links to different calendars.
        </p>
      </div>
    </div>
    <div
      class="p-6 md:p-10 rounded-xl bg-gray-800 transform origin-center hover:scale-105 hover:bg-gray-700 transition duration-150 ease-in-out"
    >
      <div class="mb-6 flex items-center h-10 text-pink-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-clock"
          ><circle cx="12" cy="12" r="10"></circle><polyline
            points="12 6 12 12 16 14"
          ></polyline></svg
        >
      </div>
      <div>
        <h3
          class="pb-1 md:pb-2 text-gray-100 font-semibold text-lg md:text-2xl leading-6"
        >
          Multiple durations
        </h3>
        <p class="text-gray-400 md:text-lg">
          Offer several options on one scheduling link.
        </p>
      </div>
    </div>
    <div
      class="p-6 md:p-10 rounded-xl bg-gray-800 transform origin-center hover:scale-105 hover:bg-gray-700 transition duration-150 ease-in-out"
    >
      <div class="mb-6 flex items-center h-10 text-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-briefcase"
          ><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path
            d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
          ></path></svg
        >
      </div>
      <div>
        <h3
          class="pb-1 md:pb-2 text-gray-100 font-semibold text-lg md:text-2xl leading-6"
        >
          Time zone scheduling
        </h3>
        <p class="text-gray-400 md:text-lg">
          We'll update your time zone for you when you travel.
        </p>
      </div>
    </div>
    <div
      class="p-6 md:p-10 rounded-xl bg-gray-800 transform origin-center hover:scale-105 hover:bg-gray-700 transition duration-150 ease-in-out"
    >
      <div class="mb-6 flex items-center h-10 text-purple-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-key"
          ><path
            d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
          ></path></svg
        >
      </div>
      <div>
        <h3
          class="pb-1 md:pb-2 text-gray-100 font-semibold text-lg md:text-2xl leading-6"
        >
          Delegate account access
        </h3>
        <p class="text-gray-400 md:text-lg">
          Allow your assistant to manage your account for you.
        </p>
      </div>
    </div>
    <div
      class="p-6 md:p-10 rounded-xl bg-gray-800 transform origin-center hover:scale-105 hover:bg-gray-700 transition duration-150 ease-in-out"
    >
      <div class="mb-6 flex items-center h-10 text-yellow-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-stop-circle"
          ><circle cx="12" cy="12" r="10"></circle><rect
            x="9"
            y="9"
            width="6"
            height="6"
          ></rect></svg
        >
      </div>
      <div>
        <h3
          class="pb-1 md:pb-2 text-gray-100 font-semibold text-lg md:text-2xl leading-6"
        >
          Single-use links
        </h3>
        <p class="text-gray-400 md:text-lg">
          Automatically archive a link after someone uses it.
        </p>
      </div>
    </div>
  </div>
</div>
