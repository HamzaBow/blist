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
      <Droppable droppableId={column.id}>
        {() => (
          <div>
            {books.map((book: any) => {
              return (
                <BookCard
                id={book.id}
                title={book.title}
                subtitle={book.subtitle}
                author={book.author}
                />
                );
              })}
          </div>
          )}
      </Droppable>
    </div>
  );
};

export default Column;
