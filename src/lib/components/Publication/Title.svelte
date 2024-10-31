<script lang="ts">
  interface Props {
    title: string;
  }

  let { title }: Props = $props();
</script>

<h2>{title}</h2>

<style>
  h2 {
    font-weight: 400;
    font-size: 1.5rem;
    margin: 0;
  }
</style>
