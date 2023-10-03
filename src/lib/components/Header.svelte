<script lang="ts" strictEvents>
  import Fa from 'svelte-fa';
  import { faMoon } from '@fortawesome/free-solid-svg-icons'
</script>

<header>
  <nav>
    <div class="container">
      <div class="navbarNav">
        <ul>
          <li>
            <a href="/" class="active">
              about
            </a>
          </li>
          <li>
            <a href="/blog">
              blog
            </a>
          </li>
          <li>
            <a href="/publications">
              publications
            </a>
          </li>
          <li>
            <a href="/projects">
              projects
            </a>
          </li>
          <li>
            <a href="/repositories">
              repositories
            </a>
          </li>
          <li>
            <a href="/cv">
              cv
            </a>
          </li>
          <li>
            <a href="/teaching">
              teaching
            </a>
          </li>
          <li>
            <a href="/people">
              people
            </a>
          </li>
          <li>
            <a href="/submenus">
              submenus
            </a>
          </li>
          <li>
            <button>
              <Fa icon={faMoon} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

<style lang="scss">
  @use "../theme.scss";

  a {
    color: black;
    display: block;
    padding: .5rem;
    text-decoration: none;
  }

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
    flex-direction: row;
    flex-wrap: nowrap;
    margin-bottom: 0;
    margin-left: auto;
    margin-top: 0;
    padding-left: 0;
  }

  li {
    list-style: none;
  }

  .active {
    font-weight: 400;
    color: theme.$primary-color;
  }

  .container {
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .navbarNav {
    align-items: center;
    display: flex;
    flex-basis: auto;
    flex-grow: 1;
    text-align: right;
  }
</style>
