import AddBook from '../components/AddBook';
import Book from '../components/Book';

const Home = () => {
  const books = [
    {
      id: 0,
      title: 'In To The Wild',
      author: 'Anthony Hopkins',
    },
    {
      id: 1,
      title: 'Spider Man',
      author: 'Peter Parker',
    },
  ];

  return (
    <>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <AddBook />
    </>
  );
};

export default Home;
