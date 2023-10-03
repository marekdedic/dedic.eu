<script lang="ts" strictEvents>
  interface $$Slots {
    defalt: Record<string, never>;
  }
</script>

<code>
  <slot />
</code>

<style lang="scss">
  @use "../theme.scss";

  code {
    background-color: theme.$primary-bg-color;
    border-radius: 3px;
    color: theme.$primary-color;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    font-size: 87.5%;
    padding: 3px;
  }
</style>
