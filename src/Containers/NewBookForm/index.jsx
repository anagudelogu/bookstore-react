import React from 'react';

const NewBookForm = () => (
  <div>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input type="text" placeholder="Enter book's title..." />
      <input type="text" placeholder="Enter book's Author..." />
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default NewBookForm;
