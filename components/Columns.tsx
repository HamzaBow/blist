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

    const sourceColumn = columns[source.droppableId];
    const destinationColumn = columns[destination.droppableId];

    if (sourceColumn === destinationColumn) {
      const newBookIds = Array.from(sourceColumn.bookIds)
      newBookIds.splice(source.index, 1);
      newBookIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...sourceColumn,
        bookIds: newBookIds
      }
      setColumns({ ...columns, [newColumn.id]: newColumn })
    } else {

      const sourceBookIds = Array.from(sourceColumn.bookIds)
      sourceBookIds.splice(source.index, 1)
      const newSourceColumn = {
        ...sourceColumn,
        bookIds: sourceBookIds
      }
      const destinationBookIds = Array.from(destinationColumn.bookIds)
      destinationBookIds.splice(destination.index, 0, draggableId)
      const newDestinationColumn = {
        ...destinationColumn,
        bookIds: destinationBookIds
      }
      setColumns({
        ...columns,
        [newSourceColumn.id]: newSourceColumn,
        [newDestinationColumn.id]: newDestinationColumn,
      });
    }
  }

  return (
    <DragDropContext onDragEnd={dragEndHandler}>
        <div className="flex items-start gap-4 mx-4">
        {initialData.columnOrder.map((columnId: string) => (
          <div className="bg-base-300 rounded-2xl w-96 min-h-[120px]">
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
