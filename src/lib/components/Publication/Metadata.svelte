<script lang="ts">
  interface Props {
    date: Date;
    inline?: boolean;
    tags: Array<string>;
  }

  let { date, inline = false, tags }: Props = $props();

  function monthName(month: number): string {
    switch (month) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
      default:
        return month.toString();
    }
  }

  let formattedDate = $derived(
    `${date.getDate().toString()} ${monthName(date.getMonth() + 1)} ${date.getFullYear().toString()}`,
  );
</script>

<div class:inline>{formattedDate}</div>
<div class:inline>
  {#each tags as tag, i (i)}
    <div class="tag" class:inline>{tag}</div>
  {/each}
</div>

<style lang="scss">
  @use "../../../lib/theme.scss";

  div {
    font-size: 0.8rem;
  }

  .inline {
    display: inline-block;
    margin-right: 1rem;
  }

  .tag {
    background-color: var(--primary-bg-color);
    border: 1px solid var(--primary-color);
    border-radius: 3px;
    margin-top: 0.5rem;
    padding: 0.1rem 0.3rem;
    width: fit-content;
    transition:
      background-color theme.$transition-duration ease,
      border-color theme.$transition-duration ease;
  }
</style>
