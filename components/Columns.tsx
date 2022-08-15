import Column from "./Column";
import initialData from "./initial-data";
import { DragDropContext } from "react-beautiful-dnd";
const Columns = () => {
  const readingColumn = initialData.columns.reading;
  const books = Object.keys(initialData.books).map(
    (key: string) => initialData.books[key]
  );
  const dragEndHandler = (result:any) => {

  }
  return (
    <div className="bg-base-300 rounded-2xl">
      <h2 className="font-medium leading-tight text-4xl text-center py-3">{readingColumn.title}</h2>
      <DragDropContext onDragEnd={dragEndHandler}>
        <Column key={readingColumn.id} column={readingColumn} books={books} />
      </DragDropContext>
    </div>
  )
};

export default Columns;
