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
    <DragDropContext onDragEnd={dragEndHandler}>
        <div className="flex items-start gap-4">
        {initialData.columnOrder.map((columnId: string) => (
          <div className="bg-base-300 rounded-2xl w-96">
            <h2 className="font-medium leading-tight text-4xl text-center py-3 mx-4">
              {columns[columnId].title}
            </h2>
            <Column
              key={columns[columnId].id}
              column={columns[columnId]}
              books={initialData.books}
            />
          </div>
        ))}
    </div>
      </DragDropContext>
  );
};

export default Columns;
