<script lang="ts">
  import type { RouteId } from "$app/types";
  import type { CourseSpec } from "$lib/types/CourseSpec";

  import { goto } from "$app/navigation";
  import { resolve } from "$app/paths";
  import { findCourseRoute } from "$lib/utils/findCourseRoute";

  import Select from "./Select.svelte";

  interface Props {
    course: CourseSpec | undefined;
    version: string;
  }

  let { course, version }: Props = $props();
</script>

<header>
  <h1>{course?.name ?? ""}</h1>
  <Select
    current={version}
    onselect={(newVersion: string): void => {
      void goto(
        resolve(`/teaching/${course?.slug ?? ""}/${newVersion}` as RouteId),
      );
    }}
    options={Object.fromEntries(
      course?.versions.map((v) => [
        v.slug,
        `${course.faculty}, ${v.semester}`,
      ]) ?? [],
    )}
  />
  {#if version !== course?.current}
    <div>
      You are viewing an outdated version of this course.
      {#if course?.current}
        <a href={resolve(findCourseRoute(course))}>Visit the current version.</a
        >
      {/if}
    </div>
  {/if}
</header>

<style lang="scss">
  @use "../theme.scss";

  div {
    background: var(--warning-color);
    border-radius: 0.25rem;
    color: #{theme.$text-color-light};
    margin-top: 1rem;
    padding: 0.7rem;
  }
</style>
