import Column from "./Column";
import initialData from "./initial-data";
const Columns = () => {
  const readingColumn = initialData.columns.reading;
  const books = Object.keys(initialData.books).map(
    (key: string) => initialData.books[key]
  );
  return (
  <div className="bg-indigo-200">
    <h2 className="font-medium leading-tight text-4xl text-center py-3">{readingColumn.title}</h2>
    <DragDropContext onDragEnd>
      <Column key={readingColumn.id} column={readingColumn} books={books} />
    </DragDropContext>
  </div>
  )
};

export default Columns;
