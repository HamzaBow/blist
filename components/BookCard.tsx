import { NextPage } from "next";
import React from "react";
interface Props {
  id: string;
  title: string;
  subtitle: string;
  author: string;
}
const BookCard: NextPage<Props> = ({ id, title, subtitle, author }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl m-4">
      <figure>
        <img
          src={`https://books.google.dz/books/content?id=${id}&printsec=frontcover&img=1&zoom=1`}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{subtitle}</p>
        <div className="card-actions justify-end">
          <span className="text-slate-500">{author}</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
