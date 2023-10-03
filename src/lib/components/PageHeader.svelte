<script lang="ts" strictEvents>
  interface $$Slots {
    subtitle: Record<string, never>;
    title: Record<string, never>;
  }
</script>

<header>
  <h1><slot name="title" /></h1>
  <slot name="subtitle" />
</header>

<style>
  h1 {
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }
</style>
