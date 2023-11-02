<script lang="ts" strictEvents>
  export let date: Date;
  export let tags: Array<string>;

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
    }
    return month.toString();
  }

  function formatDate(date: Date): string {
    return (
      date.getDay() +
      1 +
      " " +
      monthName(date.getMonth() + 1) +
      " " +
      date.getFullYear()
    );
  }
</script>

<div>{formatDate(date)}</div>
<div>
  {#each tags as tag, i (i)}
    <div class="tag">{tag}</div>
  {/each}
</div>

<style lang="scss">
  @use "../../../lib/theme.scss";

  div {
    font-size: 0.8rem;
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
