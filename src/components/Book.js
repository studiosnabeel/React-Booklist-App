/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { title, author, id } = props;
  return (
    <div className="bookContainer">
      <div className="bookInfo">
        <h4 className="book-category"> Economy</h4>
        <h2 className="bookTitle">{title}</h2>
        <p className="bookAuthor">{author}</p>
        <div className="bookBtnContainer">
          <button type="button" className="bookBtn">
            Comments
          </button>
          <button
            type="button"
            className="bookBtn"
            onClick={() => dispatch(removeBook(id))}
          >
            Remove
          </button>
          <button type="button" className="EditBtn">
            Edit
          </button>
        </div>
      </div>
      <div className="progress">
        <div className="circleProgBar" />
        <div className="completed">
          <p>0%</p>
          <p>Completed</p>
        </div>
        <div className="currChapter">Chapter0</div>
        <button type="button" className="updateProgBtn">
          Update Progress
        </button>
      </div>
    </div>
  );
};

export default Book;
