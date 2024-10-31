<script lang="ts">
  import { page } from "$app/stores";

  interface Props {
    href: string;
    onclick: ((this: void) => void) | undefined;
    title: string;
  }

  let { href, onclick, title }: Props = $props();

  let active = $derived($page.route.id === href);
</script>

<li>
  <a class:active {href} {onclick}>
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
