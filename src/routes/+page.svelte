<script>
  import ThemeSelector from "$lib/ThemeSelector.svelte";
  import { BrowserThemeStore } from "$lib/theme";
</script>

<header
  class="bg-neutral-200 dark:bg-neutral-900 p-4 flex items-center justify-between h-1/10"
>
  <h1 class="text-lg font-bold">Dark mode using SvelteKit and TailWindCSS</h1>

  <ThemeSelector />
</header>

<div class="flex items-center justify-center h-9/10">
  <p class="text-xl">
    You are currently in
    {$BrowserThemeStore} mode!
  </p>
</div>
