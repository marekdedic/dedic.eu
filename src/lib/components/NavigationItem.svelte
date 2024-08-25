<script lang="ts" strictEvents>
  import { page } from "$app/stores";
  import { createEventDispatcher } from "svelte";

  export let href: string;
  export let title: string;

  const dispatch = createEventDispatcher<{ click: null }>();

  $: active = $page.route.id === href;
</script>

<li>
  <a
    class:active
    {href}
    on:click={() => {
      dispatch("click");
    }}
  >
    {title}
  </a>
</li>

<style lang="scss">
  @use "../theme.scss";

  a {
    color: var(--text-color);
    display: block;
    padding: 0.5rem;
    transition: color theme.$transition-duration ease;
  }

  a:hover {
    color: var(--primary-color);
    text-decoration: none;
    transition: color theme.$transition-duration ease;
  }

  li {
    list-style: none;
  }

  .active {
    font-weight: 400;
    color: var(--primary-color);
    transition: color theme.$transition-duration ease;
  }
</style>
