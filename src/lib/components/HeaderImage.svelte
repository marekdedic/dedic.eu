<script lang="ts" strictEvents>
  export let src: string;
</script>

<div class="container">
  <figure>
    <picture>
      <img {src} />
    </picture>
  </figure>

  <div class="title">
    <slot />
  </div>
</div>

<style>
  .container {
    float: right;
    width: 30%;
    margin-left: 1rem;
    margin-right: 0;
  }

  .title {
    font-family: monospace;
    margin-top: 5px;
  }

  figure {
    margin: 0;
  }

  img {
    border-radius: .25rem;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
    width: 100%;
  }
</style>
