<script lang="ts" strictEvents>
  export let level: number;

  interface $$Slots {
    default: Record<string, never>;
  }

  let anchorComponent: HTMLAnchorElement | undefined;

  $: title = anchorComponent?.innerText ?? "";
  $: id = title
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^0-9a-z\s]/g, "")
    .replace(/\s+/g, "-");
</script>

{#if level === 2}
  <h2>
    <a bind:this={anchorComponent} {id} href={"#" + id}>
      <slot />
    </a>
  </h2>
{:else if level === 3}
  <h3>
    <a bind:this={anchorComponent} {id} href={"#" + id}>
      <slot />
    </a>
  </h3>
{:else if level === 4}
  <h4>
    <a bind:this={anchorComponent} {id} href={"#" + id}>
      <slot />
    </a>
  </h4>
{:else if level === 5}
  <h5>
    <a bind:this={anchorComponent} {id} href={"#" + id}>
      <slot />
    </a>
  </h5>
{:else if level === 6}
  <h6>
    <a bind:this={anchorComponent} {id} href={"#" + id}>
      <slot />
    </a>
  </h6>
{/if}

<style>
  a {
    color: unset;
    cursor: pointer;
    text-decoration: unset;
  }
</style>
