<script lang="ts" strictEvents>
  import Fa from 'svelte-fa';
  import { faMoon } from '@fortawesome/free-solid-svg-icons'
  import NavigationItem from './NavigationItem.svelte';
</script>

<header>
  <nav>
    <div class="container">
      <ul>
        <NavigationItem href="/" title="about" />
        <NavigationItem href="/blog" title="blog" />
        <NavigationItem href="/publications" title="publications" />
        <NavigationItem href="/projects" title="projects" />
        <NavigationItem href="/repositories" title="repositories" />
        <NavigationItem href="/cv" title="cv" />
        <NavigationItem href="/teaching" title="teaching" />
        <NavigationItem href="/people" title="people" />
        <NavigationItem href="/submenus" title="submenus" />
        <li>
          <button>
            <Fa icon={faMoon} />
          </button>
        </li>
      </ul>
    </div>
  </nav>
</header>

<style lang="scss">
  @use "../theme.scss";

  button {
    background-color: inherit;
    border: 0;
    padding: 0;
    padding-left: 10px;
    padding-top: 12px;
  }

  nav {
    border-bottom: 1px solid theme.$divider-color;
    padding: .5rem 1rem;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }

  ul {
    display: flex;
    margin-bottom: 0;
    margin-left: auto;
    margin-top: 0;
    padding-left: 0;
  }

  li {
    list-style: none;
  }

  .container {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
    padding-left: 15px;
    padding-right: 15px;
  }
</style>
