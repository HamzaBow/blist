import React, { useState } from "react";
import BookCard from "./BookCard";
import useSWR from "swr";
import { NextPage } from "next";

const stringifyAuthors = (authors: string[]) => {
  if (authors.length === 0) {
    return ""
  }
  if (authors.length === 1) {
    return authors[0]
  }
  return authors.slice(0, authors.length - 1).join(", ") + " and " + authors[authors.length - 1]
}

interface SRDProps {
  searchQuery: string;
}
const SearchResultsDisplay:NextPage<SRDProps> = ({ searchQuery }) => {
  if (searchQuery === "") {
    return (<></>)
  }
  // @ts-ignore
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&langRestrict=en`, fetcher)
  console.log('data', data)
  console.log('error :>> ', error);

  if (error) return (
    <div className="alert alert-error shadow-lg mb-2">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Error! Failed to load.</span>
      </div>
    </div>
  )
  if (!data) return <progress className="progress progress-info w-[23.3rem]"></progress>

  if (data.totalItems === 0) return (
    <div className="alert alert-warning shadow-lg mb-2">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        <span>Sorry! no books found.</span>
      </div>
    </div>
  )
  // render data
  return (
    <div className="book-search-results">
      {/* @ts-ignore */}
      {data.items.map((bookItem: any, index) => {
        // const { id, title, subtitle, author } = bookItem;
        const id = bookItem.id
        const title = bookItem.volumeInfo.title
        const subtitle = bookItem.volumeInfo.subtitle || ""
        const authors: string[] = bookItem.volumeInfo.authors || []
        return (
        <div key={index} className={"card card-side shadow-xl mx-4 mb-4 bg-base-100"}>
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
              <span className="text-slate-500">{stringifyAuthors(authors)}</span>
            </div>
          </div>
      </div>

        )})}
    </div>


  )
}

const SearchUI = () => {
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState("sapiens")
  const [searchBtnClicked, setSearchBtnClicked] = useState(false)

  const handleBookSearch = async () => {
    // const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&langRestrict=en`)
    // const data = await res.json()
    // setSearchResults(data.items)
    // console.log(data.items)
    setSearchBtnClicked(true)
  }

  return (
    <div className="bg-base-300 rounded-2xl px-4 pt-4 pb-1 w-[25.3rem]">
      <div className="form-control">
        <div className="input-group input-group-lg mb-4">
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
      { searchBtnClicked &&
        <SearchResultsDisplay searchQuery={searchQuery} />
      }
    </div>
  );
};

export default SearchUI;
