import React, { useState } from "react";
import BookCard from "./BookCard";

const SearchUI = () => {
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState("sapiens")

  const handleBookSearch = async () => {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&langRestrict=en&maxResults=5`)
    const data = await res.json()
    setSearchResults(data.items)
    console.log(data.items)
  }

  return (
    <div>
      <div className="form-control">
        <div className="input-group input-group-lg">
          <input type="text" placeholder="Search…" className="input input-bordered input-lg" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <button className="btn btn-square btn-lg" onClick={handleBookSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="book-search-results">
        <hr />
        {searchResults.map((bookItem: any, index) => {
          // const { id, title, subtitle, author } = bookItem;
          const id = bookItem.id
          const title = bookItem.volumeInfo.title
          const subtitle = bookItem.volumeInfo.subtitle || ""
          const authors = bookItem.volumeInfo.authors || []
          return (
          // <BookCard key={index} id={id} index={index} title={title} subtitle={subtitle} author={authors[0]} />
          <div key={index}>
            <div>{id}</div>
            <div>{title}</div>
            <div>Authors</div>
            <ul>
              {authors.map((author: string) => (
                <li> - {author}</li>
              ))}
            </ul>
            <hr />
          </div>
          )})}
      </div>
    </div>
  );
};

export default SearchUI;
