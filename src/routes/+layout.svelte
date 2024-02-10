<script>
  import "@css/global.css";
  import "@css/animations.css";
  import Footer from "../components/navigation/Footer.svelte";
  import Navbar from "../components/navigation/Navbar.svelte";
</script>

<div
  class="dark:[background:radial-gradient(125%_125%_at_40%_20%,#000_40%,#63e_100%)]"
>
  <Navbar />
  <slot />
  <Footer />
</div>
