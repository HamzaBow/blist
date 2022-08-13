const initialData: any = {
  books: {
    "sxVHDwAAQBAJ": {
      id: "sxVHDwAAQBAJ",
      title: "12 Rules for Life",
      subtitle: "An Antidote to Chaos",
      author: "Jordan Peterson",
    },
    "7ayVcWQJ89YC": {
      id: "7ayVcWQJ89YC",
      title: "The 4-Hour Workweek",
      subtitle: "Escape 9–5, Live Anywhere, and Join the New Rich",
      author: "Timothy Ferris",
    },
    "FILmrQEACAAJ": {
      id: "FILmrQEACAAJ",
      title: "Sapiens",
      subtitle: "A Brief History of Humankind",
      author: "Yuval Noah Harari",
    },
    "6Z6zDwAAQBAJ": {
      id: "6Z6zDwAAQBAJ",
      title: "How to Avoid a Climate Disaster",
      subtitle: "The Solutions We Have and the Breakthroughs We Need",
      author: "Bill Gates",
    },
  },
  columns: {
    "reading": {
      id: "reading",
      title: "Currently Reading",
      bookIds: ["sxVHDwAAQBAJ", "7ayVcWQJ89YC", "FILmrQEACAAJ", "6Z6zDwAAQBAJ"],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1"],
};

export default initialData;
