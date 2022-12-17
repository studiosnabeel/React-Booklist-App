import React from 'react';

export default function AddBook() {
  return (
    <div>
      <h2>Add New Book</h2>
      <form>
        <input type="text" placeholder="Insert title..." />
        <select name="category">
          <option disabled selected>
            Category
          </option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
