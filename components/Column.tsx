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
        {(provided, snapshot) => {
          let draggedOverColor = "";
          if (snapshot.isDraggingOver) {
            if (document.documentElement.dataset.theme === 'dark') {
              draggedOverColor = "bg-orange-900"
            } else {
              draggedOverColor = "bg-orange-100"
            }
          }
          return (
            <div {...provided.droppableProps} ref={provided.innerRef} className={"py-1 rounded-b-2xl transition-colors " + draggedOverColor}>
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
          )}}
      </Droppable>
    </div>
  );
};

export default Column;
