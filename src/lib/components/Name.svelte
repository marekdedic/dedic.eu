<script lang="ts">
  interface Props {
    first: string;
    last: string;
  }

  let { first, last }: Props = $props();
</script>

<span>{first}</span>
{last}

<style>
  span {
    font-weight: 700;
  }
</style>
