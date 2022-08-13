import { NextPage } from 'next'
import React from 'react'
import BookCard from "./BookCard"

interface Props {
  column: any;
  books: any;
}
const Column:NextPage<Props> = ({ column, books }) => {
  return (
    <div>
      <div>
        {books.map( (book:any) => {
          return <BookCard id={book.id} title={book.title} subtitle={book.subtitle} author={book.author} />
        })}
      </div>
    </div>
  )
}

export default Column