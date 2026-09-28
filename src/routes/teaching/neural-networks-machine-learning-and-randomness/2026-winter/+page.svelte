<script lang="ts" module>
  import type { CourseSpec, CourseVersionMeta } from "$lib/types/CourseSpec";

  export const version: CourseVersionMeta = {
    offerings: [
      {
        code: "NMS",
        faculty: "FIT",
        name: "neural networks, machine learning and randomness",
      },
      {
        code: "NAIL138",
        faculty: "MFF",
        name: "neural networks, machine learning, and randomness",
      },
    ],
    semester: "winter 2026",
  };
</script>

<script lang="ts">
  import CourseHeader from "$lib/components/CourseHeader.svelte";
  import ExternalLink from "$lib/components/ExternalLink.svelte";
  import PageContentBox from "$lib/components/PageContentBox.svelte";
  import TeachingSideNav from "$lib/components/TeachingSideNav.svelte";

  interface Props {
    data: { teachingSpec: Array<CourseSpec> };
  }

  let { data }: Props = $props();
</script>

<TeachingSideNav spec={data.teachingSpec} />

<PageContentBox leftSidePanel={true}>
  <CourseHeader spec={data.teachingSpec} />

  <article>
    <p>
      The tutorials for the course Neural Networks, Machine Learning and
      Randomness are held on odd weeks on Wednesdays from 11:0 to 12:30 and from
      12:45 to 14:15 (two parallel groups) in room T9:350 (see
      <ExternalLink href="https://timetable.fit.cvut.cz/new/courses/NI-NMS.26"
        >timetable</ExternalLink
      >), or as announced in lectures and tutorials. Information about the exam,
      course requirements, and grading can be found on <ExternalLink
        href="https://courses.fit.cvut.cz/NI-NMS/index.html"
        >FIT courses</ExternalLink
      >.
    </p>
  </article>
</PageContentBox>
