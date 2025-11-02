export default {
  id: "67bafa90-f52e-4b21-9fc2-e36d19ef6840",
  semesters: [
    {
      id: "70dde3ea-1ebc-4ebd-ab8c-ea81593e42ef",
      name: "Semestr 2",
      subject: [
        {
          id: "9b576d8a-4710-4672-afde-951323a03bab",
          ects: 10,
          name: "Fizyka 2",
          teacher: {
            personId: "bead4884-e7bc-4952-b023-983b337cfe1e",
            title: "prof",
            firstName: "Zbigniew",
            lastName: "Szklarski",
            email: "z@s.com",
            phone: "123123123",
          },
          grades: [
            {
              type: "EXAM",
              currentGrade: 2,
              gradeHistory: [2],
            },
            {
              type: "LAB",
              currentGrade: 5,
              gradeHistory: [],
            },
          ],
          finalGrade: 3.5,
        },
      ],
    },
    {
      id: "e787e7e4-738f-4a16-8ad8-814fcbc24da0",
      name: "Semestr 1",
      subject: [
        {
          id: "c0c14d18-67a1-46e7-bd48-552e49415dd2",
          ects: 3,
          name: "Algebra",
          teacher: {
            personId: "1fd7ea16-c654-4b5b-9459-2062f33d1794",
            title: "dr hab",
            firstName: "Waclaw",
            lastName: "Frydrych",
            email: "w@f.com",
            phone: "121212123",
          },
          grades: [
            {
              type: "EXAM",
              currentGrade: 3,
              gradeHistory: [2],
            },
          ],
          finalGrade: 3,
        },
        {
          id: "c8bf838b-03ad-4e8c-98e0-03d1adcd3b54",
          ects: 6,
          name: "Fizyka 1",
          teacher: {
            personId: "bead4884-e7bc-4952-b023-983b337cfe1e",
            title: "prof",
            firstName: "Zbigniew",
            lastName: "Szklarski",
            email: "z@s.com",
            phone: "123123123",
          },
          grades: [
            {
              type: "EXAM",
              currentGrade: 3,
              gradeHistory: [2],
            },
          ],
        },
      ],
    },
  ],
};
