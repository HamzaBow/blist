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
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {books.map((book: any, index: number) => {
              return (
                <BookCard
                  key={book.id}
                  id={book.id}
                  index={index}
                  title={book.title}
                  subtitle={book.subtitle}
                  author={book.author}
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
