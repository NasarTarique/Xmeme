import React, { Fragment, useEffect, useState } from "react";
import { render } from "react-dom";
import Nav from "./Nav.js";
import Form from "./Form.js";
import "./styles/main.css";

function App() {
  const [posts, setPosts] = useState([]);
		const updatePosts = (x)=>setPosts(x)
  useEffect(() => {
    fetch("/memes/")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);
  return (
    <Fragment>
      <Nav />
			<Form memes={posts} updateposts={updatePosts}/>
      <div className="meme-container">
        {posts.map((elem) => {
          return (
            <div className="meme" key={elem.id}>
              <h3>
                <span>
                  <i className="fas fa-user"></i>
                </span>
                {elem.name}
              </h3>
              <p>{elem.caption}</p>
              <div className="img-container">
                <img src={elem.url} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export default App;
const container = document.getElementById("app");
render(<App />, container);
