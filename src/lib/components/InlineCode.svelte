<script lang="ts" strictEvents>
  interface $$Slots {
    default: Record<string, never>;
  }
</script>

<code>
  <slot />
</code>

<style lang="scss">
  @use "../theme.scss";

  code {
    background-color: var(--primary-bg-color);
    border-radius: 3px;
    color: var(--primary-color);
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    font-size: 87.5%;
    padding: 3px;
    transition: background-color theme.$transition-duration ease, color theme.$transition-duration ease;
  }
</style>
