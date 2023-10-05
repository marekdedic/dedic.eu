<script lang="ts" strictEvents>
  import { createEventDispatcher } from "svelte";

  import { page } from "$app/stores";

  export let href: string;
  export let title: string;

  const dispatch = createEventDispatcher<{ click: never }>();

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
    color: theme.$text-color;
    display: block;
    padding: 0.5rem;
  }

  a:hover {
    color: theme.$primary-color;
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  .active {
    font-weight: 400;
    color: theme.$primary-color;
  }
</style>
