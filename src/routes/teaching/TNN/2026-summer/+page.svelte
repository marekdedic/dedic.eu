<script lang="ts">
  import type { CourseSpec } from "$lib/types/CourseSpec";

  import CouseHeader from "$lib/components/CouseHeader.svelte";
  import ExternalLink from "$lib/components/ExternalLink.svelte";
  import PageContentBox from "$lib/components/PageContentBox.svelte";
  import TeachingSideNav from "$lib/components/TeachingSideNav.svelte";

  interface Props {
    data: { teachingSpec: Array<CourseSpec> };
  }

  let { data }: Props = $props();
</script>

<svelte:head>
  <title>Theory of neural networks, summer 2026 — Marek Dědič</title>
  <meta
    name="description"
    content="Theory of neural networks [FIT CTU], summer 2026 — study materials, requirements, and grading, taught by Marek Dědič."
  />
</svelte:head>

<TeachingSideNav spec={data.teachingSpec} />

<PageContentBox leftSidePanel={true}>
  <CouseHeader
    course={data.teachingSpec.find((c) => c.slug === "TNN")}
    version="2026-summer"
  />

  <article>
    <p>
      The tutorials for the course Theory of Neural Networks are held on odd
      weeks on Mondays from 16:15 to 17:45 in room T9:351 (see <ExternalLink
        href="https://timetable.fit.cvut.cz/new/courses/NI-TNN.25"
        >timetable</ExternalLink
      >), or as announced in lectures and tutorials. Information about the exam,
      course requirements, and grading can be found on <ExternalLink
        href="https://courses.fit.cvut.cz/NI-TNN/index.html"
        >FIT courses</ExternalLink
      >.
    </p>
  </article>
</PageContentBox>
