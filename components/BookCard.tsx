import { NextPage } from "next";
import React from "react";
import { Draggable } from 'react-beautiful-dnd';
interface Props {
  id: string;
  index: number;
  title: string;
  subtitle: string;
  author: string;
}
const BookCard: NextPage<Props> = ({ id, index, title, subtitle, author }) => {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided, snapshot) => {
        let draggingColor = "";//"bg-emerald-200"
        if (snapshot.isDragging) {
          if (document.documentElement.dataset.theme === 'dark') {
            draggingColor = "bg-emerald-900"
          } else {
            draggingColor = "bg-emerald-100"
          }
        }
        return (
          <div
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
            className={`card card-side bg-base-100 shadow-xl m-4 ` + draggingColor}
          >
          <figure className="w-24">
            <img
              src={`https://books.google.dz/books/content?id=${id}&printsec=frontcover&img=1&zoom=1`}
              alt={`${title} Book Cover`}
              className="w-24 h-36"
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title">{title}</h2>
            <p>{subtitle}</p>
            <div className="card-actions justify-end">
              <span className="text-slate-500">{author}</span>
            </div>
          </div>
        </div>
      )}}
    </Draggable>
  );
};

export default BookCard;
