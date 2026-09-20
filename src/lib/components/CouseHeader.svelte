<script lang="ts">
  import type { CourseSpec } from "$lib/types/CourseSpec";

  import { goto } from "$app/navigation";
  import { resolve } from "$app/paths";
  import { page } from "$app/state";
  import { findCourseRoute } from "$lib/utils/findCourseRoute";

  import Select from "./Select.svelte";

  interface Props {
    spec: Array<CourseSpec>;
  }

  let { spec }: Props = $props();

  // Route is /teaching/<courseSlug>/<version>
  const parts = $derived(page.url.pathname.split("/").filter(Boolean));
  const course = $derived(spec.find((c) => c.slug === parts[1]));
  const version = $derived(parts[2]);
</script>

<header>
  <h1>{course?.name ?? ""}</h1>
  <Select
    current={version}
    onselect={(newVersion: string): void => {
      void goto(
        resolve(`/teaching/${course?.slug ?? ""}/${newVersion}` as "/"),
      );
    }}
    options={Object.fromEntries(
      course?.versions.map((v) => [v.slug, v.semester]) ?? [],
    )}
  />
  {#if version !== course?.current}
    <div>
      You are viewing an outdated version of this course.
      {#if course?.current}
        <a href={resolve(findCourseRoute(course) as "/")}
          >Visit the current version.</a
        >
      {/if}
    </div>
  {/if}
</header>

<style>
  div {
    background: var(--warning-color);
    border-radius: 0.25rem;
    margin-top: 1rem;
    padding: 0.7rem;
  }
</style>
