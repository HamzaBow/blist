import { NextPage } from 'next'
import React from 'react'
interface Props {
  title: string;
  subtitle: string;
  author: string;
}
const BookCard:NextPage<Props> = ({ title, subtitle, author }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-4">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{subtitle}</p>
        <div className="card-actions justify-end">
          <span className="text-slate-500">{author}</span>
        </div>
      </div>
    </div>
  )
}

export default BookCard