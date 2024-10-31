<script lang="ts">
  interface Props {
    height?: string;
    sheetId: string;
    showRowColumnHeaders?: boolean;
    showSheetTab?: boolean;
    showTitle?: boolean;
    title: string;
    url: string;
  }

  let {
    height = "1024px",
    sheetId,
    showRowColumnHeaders = true,
    showSheetTab = false,
    showTitle = false,
    title,
    url,
  }: Props = $props();
</script>

<iframe
  {height}
  src={`${url}?gid=${sheetId}&amp;single=true&amp;widget=${showSheetTab.toString()}&amp;headers=${showRowColumnHeaders.toString()}&amp;chrome=${showTitle.toString()}`}
  {title}
  width="100%"
></iframe>
