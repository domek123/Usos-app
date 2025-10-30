import { SubjectType } from "@/types";

export default [
  {
    id: "sem-1",
    name: "Semestr zimowy 2025/26",
    subjects: [
      {
        id: "subj-1",
        name: "Analiza Matematyczna 1",
        ects: 5,
        updateDate: "12-12-2025",
        finalGrade: null,
        grades: [
          {
            id: "g1",
            type: SubjectType.LAB,
            currentGrade: 4.5,
            gradeHistory: [2.0, 2.0],
          },
          {
            id: "g2",
            type: SubjectType.EXAM,
            // currentGrade: 5.0,
            gradeHistory: [],
          },
        ],
        teacher: {
          id: "123",
          title: "prof",
          firstName: "Waclaw",
          lastName: "Frydrych",
          email: "w@f.agh.edu.pl",
          phone: "123123123",
        },
      },
    ],
  },
  {
    id: "sem-2",
    name: "Semestr letni 2026",
    subjects: [
      {
        id: "subj-2",
        name: "Fizyka 2",
        ects: 6,
        updateDate: "12-12-2025",
        finalGrade: 4.0,
        grades: [
          {
            id: "g3",
            type: SubjectType.PROJECT,
            currentGrade: 4.0,
            gradeHistory: [],
          },
        ],
        teacher: {
          id: "123",
          title: "prof",
          firstName: "Zbigniew",
          lastName: "Szklarski",
          email: "z@s.agh.edu.pl",
          phone: "123123123",
        },
      },
    ],
  },
];
