import { NextPage } from "next";
import React from "react";
import BookCard from "./BookCard";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  column: any;
  books: any;
}
const Column: NextPage<Props> = ({ column, books }) => {
  return (
    <div>
      <Droppable key={column.id} droppableId={column.id}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef} className="pb-1">
            {column.bookIds.map((id: any, index: number) => {
              return (
                <BookCard
                  key={id}
                  id={id}
                  index={index}
                  title={books[id].title}
                  subtitle={books[id].subtitle}
                  author={books[id].author}
                />
                );
              })}
            {provided.placeholder}
          </div>
          )}
      </Droppable>
    </div>
  );
};

export default Column;
