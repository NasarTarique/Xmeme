import React, { Fragment, useEffect, useState } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useHistory,
} from "react-router-dom";
import Nav from "./Nav.js";
import Form from "./Form.js";
import "./styles/main.css";

function Parm() {
  const [meme, setMeme] = useState({
    id: "",
    name: "",
    url: "",
    caption: "",
  });
  let { id } = useParams();
  useEffect(() => {
    fetch(`/memes/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setMeme(data);
      });
  }, []);
  return (
    <div className="meme-container">
      <div className="meme" key={meme.id}>
        <h3>
          <span>
            <i className="fas fa-user"></i>
          </span>
          {meme.name}
        </h3>
        <p>{meme.caption}</p>
        <div className="img-container">
          <img src={meme.url} alt="" />
        </div>
      </div>
    </div>
  );
}
function Home() {
  const [posts, setPosts] = useState([]);
  const updatePosts = (x) => setPosts(x);
  const history = useHistory();
		const handleClick = (id, e) => {
				history.push(`/home/${id}`);
  };
  useEffect(() => {
    fetch("/memes/")
      .then((resp) => resp.json())
      .then((data) => {
        setPosts(data.slice(0, 100));
      });
  }, []);
  return (
    <Fragment>
        <Nav />
        <Switch>
          <Route exact path="/home">
            <Form memes={posts} updateposts={updatePosts} />
            <div className="meme-container">
              {posts.map((elem) => {
                return (
                  <div
                    className="meme"
                    key={elem.id}
						  onClick={e => handleClick(elem.id, e)}
                    data-id={elem.id}
                  >
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
          </Route>
          <Route path="/home/:id" children={<Parm />}></Route>
        </Switch>
    </Fragment>
  );
}
function App(){
		return(
				<Router>
						<Home />
				</Router>
		)
}
export default App;
const container = document.getElementById("app");
render(<App />, container);
