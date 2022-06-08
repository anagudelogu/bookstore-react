import styled from 'styled-components';

const FormContainer = styled.section`
  width: 90%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-family: var(--montserrat);
  font-size: 1rem;
  font-weight: bold;
  color: var(--warm-gray);
  margin-bottom: 6px;
`;

const Form = styled.form`
  text-align: center;
  margin-inline: auto;
`;

const Input = styled.input`
  margin: 4px;
`;

const DropDown = styled.select`
  margin-left: 15px;
  font-family: var(--montserrat);
  font-size: 0.8rem;
  outline: none;
  border: none;
  background-color: transparent;
`;

const Button = styled.button`
  outline: none;
  border: none;
  display: block;
  margin-top: 12px;
  margin-inline: auto;
  padding: 0.4rem 2rem;
  background-color: var(--blue);
  font-family: var(--roboto);
  font-weight: bold;
  font-size: 0.6rem;
  border-radius: 3px;
  color: white;
`;

export {
  FormContainer, Title, Form, DropDown, Input, Button,
};

/* <div>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Enter book's title..."
          value={title}
          onChange={handleTitleChange}
        />
        <input
          name="author"
          type="text"
          placeholder="Enter book's Author..."
          value={author}
          onChange={handleAuthorChange}
        />
        <button type="submit">ADD BOOK</button>
        <select
          name="categorySelector"
          onChange={handleCategoryChange}
        >
          <option default>Select Category</option>
          {allCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </form>
    </div> */
