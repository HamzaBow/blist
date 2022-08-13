import initialData from './initial-data'

const Columns = () => {
  return (
    <div>
      {Object.keys(initialData.books).map((key: any) => (
        <p>
          {initialData.books[key].content}
        </p>
      ))}
    </div>
  )
}

export default Columns