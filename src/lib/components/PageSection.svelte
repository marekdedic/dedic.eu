<script lang="ts" strictEvents>
  interface $$Slots {
    default: Record<string, never>;
  }
</script>

<div>
  <slot />
</div>

<style>
  div::after {
    clear: both;
    content: "";
    display: block;
  }
</style>
