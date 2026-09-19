import type { CourseSpec } from "$lib/types/CourseSpec";

export const teachingSpec: Array<CourseSpec> = [
  {
    current: null,
    faculty: "FJFI",
    name: "matematika 3",
    slug: "MAT3",
    versions: [{ semester: "ZS 20/21", slug: "2020-winter" }],
  },
  {
    current: null,
    faculty: "FJFI",
    name: "lineární algebra 2",
    slug: "LAL2",
    versions: [{ semester: "LS 20/21", slug: "2021-summer" }],
  },
  {
    current: null,
    faculty: "FJFI",
    name: "lineární algebra 1",
    slug: "LAL1",
    versions: [
      { semester: "ZS 21/22", slug: "2021-winter" },
      { semester: "ZS 22/23", slug: "2022-winter" },
      { semester: "ZS 23/24", slug: "2023-winter" },
      { semester: "ZS 24/25", slug: "2024-winter" },
    ],
  },
  {
    current: null,
    faculty: "FIT",
    name: "theory of neural networks",
    slug: "TNN",
    versions: [
      { semester: "summer 2022", slug: "2022-summer" },
      { semester: "summer 2023", slug: "2023-summer" },
      { semester: "summer 2024", slug: "2024-summer" },
      { semester: "summer 2025", slug: "2025-summer" },
      { semester: "summer 2026", slug: "2026-summer" },
    ],
  },
  {
    current: "2026-winter",
    faculty: "FJFI",
    name: "theoretical fundamentals of neural networks",
    slug: "TZN",
    versions: [
      { semester: "winter 2025", slug: "2025-winter" },
      { semester: "winter 2026", slug: "2026-winter" },
    ],
  },
  {
    current: "2026-winter",
    faculty: "FIT",
    name: "neural networks, machine learning and randomness",
    slug: "NMS",
    versions: [
      { semester: "winter 2025", slug: "2025-winter" },
      { semester: "winter 2026", slug: "2026-winter" },
    ],
  },
  {
    current: null,
    faculty: "FJFI",
    name: "neural networks, machine learning, and randomness",
    slug: "NSN",
    versions: [{ semester: "summer 2026", slug: "2026-summer" }],
  },
];
