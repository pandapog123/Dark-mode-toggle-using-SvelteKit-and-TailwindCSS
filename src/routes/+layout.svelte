<script lang="ts">
  import { BrowserThemeStore } from "$lib/theme";

  import "../app.css";
</script>

<div class="h-screen w-screen overflow-auto {$BrowserThemeStore}">
  <div class="bg-neutral-100 dark:bg-neutral-800 dark:text-white h-screen">
    <slot />
  </div>
</div>
