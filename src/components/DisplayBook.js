import React from 'react';

const DisplayBook = (props) => (
  <div>
    <div>
      <p>{props.book.category}</p>
      <h2>{props.book.title}</h2>
      <a>{props.book.author}</a>
      <div>
        <a href="#">Comments</a>
        <a href="#">Remove</a>
        <a href="#">Edit</a>
      </div>
    </div>
    <div>
      <progress value={props.book.progress} max="100"></progress>
      <div>
        <h4>{props.book.progress}%</h4>
        <span>Completed</span>
      </div>
    </div>
    <div>
      <p>Current Chapter</p>
      <h4>{props.book.currentChapter}</h4>
      <button type="button">Update Progress</button>
    </div>
  </div>
);

export default DisplayBook;
