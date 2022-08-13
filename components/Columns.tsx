import Column from "./Column";
import initialData from "./initial-data";
const Columns = () => {
  const readingColumn = initialData.columns.reading;
  const books = Object.keys(initialData.books).map(
    (key: string) => initialData.books[key]
  );
  return <Column key={readingColumn.id} column={readingColumn} books={books} />;
};

export default Columns;
