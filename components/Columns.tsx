import Column from "./Column";
import initialData from "./initial-data";
import { DragDropContext } from "react-beautiful-dnd";
import { useState } from "react";
const Columns = () => {
  const readingColumn = initialData.columns.reading;

  const [columns, setColumns] = useState(initialData.columns)

  const dragEndHandler = (result:any) => {
    const { destination, source, draggableId} = result;

    if(!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = columns[source.droppableId];
    const newBookIds = Array.from(column.bookIds)
    newBookIds.splice(source.index, 1);
    newBookIds.splice(destination.index, 0, draggableId)

    const newColumn = {
      ...column,
      bookIds: newBookIds
    }
    setColumns({ ...columns, [newColumn.id]: newColumn })
  }

  return (
    <div className="bg-base-300 rounded-2xl">
      <h2 className="font-medium leading-tight text-4xl text-center py-3">{readingColumn.title}</h2>
      <DragDropContext onDragEnd={dragEndHandler}>
        <Column key={readingColumn.id} column={columns["reading"]} books={initialData.books} />
      </DragDropContext>
    </div>
  )
};

export default Columns;
