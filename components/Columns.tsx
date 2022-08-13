import BookCard from "./BookCard"
import initialData from "./initial-data"

const Columns = () => {
  return (
    <div>
      {Object.keys(initialData.books).map((key: any) => {
        const { id, title, subtitle, author } = initialData.books[key]
        return <BookCard id={id} title={title} subtitle={subtitle} author={author} />
      })}
    </div>
  )
}

export default Columns