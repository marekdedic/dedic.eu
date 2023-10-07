<script lang="ts" strictEvents>
  export let title: string;
  export let url: string;
  export let sheetId: string;
  export let showSheetTab = false;
  export let showRowColumnHeaders = true;
  export let showTitle = false;

  export let height = 1024;
</script>

<iframe
  {height}
  src={url +
    "?gid=" +
    sheetId +
    "&amp;single=true&amp;widget=" +
    showSheetTab.toString() +
    "&amp;headers=" +
    showRowColumnHeaders.toString() +
    "&amp;chrome=" +
    showTitle.toString()}
  {title}
  width="100%"
></iframe>
