const initialData: any = {
  books: {
    'book-1': { id: 'book-1', content: '12 Rules for Life' },
    'book-2': { id: 'book-2', content: 'The 4-Hour Workweek' },
    'book-3': { id: 'book-3', content: 'Sapiens' },
    'book-4': { id: 'book-4', content: 'How to Avoid a Climate Disaster' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      bookIds: ['book-1', 'book-2', 'book-3', 'book-4'],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1'],
};

export default initialData;