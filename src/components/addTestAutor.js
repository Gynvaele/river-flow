import React, { useState } from "react";

export const AddTestAuthor = () => {
  const [authorName, setAuthorName] = useState("");
  const authors = [];

  const AuthorFunction = e => {
    e.preventDefault();
    localStorage.setItem("authorName", JSON.stringify(authorName));
    console.log(authorName);
    setAuthorName("");
  };

  const getAuthor = e => {
    e.preventDefault();
    const name = JSON.parse(localStorage.getItem("authorName"));
    return console.log(name);
  };

  return (
    <div>
      <form onSubmit={AuthorFunction}>
        <span>Name: </span>
        <input
          value={authorName}
          placeholder={"New author"}
          onChange={e => setAuthorName(e.target.value)}
          type="text"
        />
        <button onClick={e => AuthorFunction(e)}>Submit</button>
      </form>
      <div>
        <button onClick={getAuthor}>Get author</button>
        <div>
          {authors.map((elm, i) => (
            <h3 key={"_" + i}>{elm.authorName}</h3>
          ))}
        </div>
      </div>
    </div>
  );
};
