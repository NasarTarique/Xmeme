import React, { useState, useEffect } from "react";

function Form(props) {
  const [formdata, setFormdata] = useState({
    name: "",
    url: "",
    caption: "",
  });
  const postMeme = () => {
    fetch("/memes/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: formdata.name,
        url: formdata.url,
        caption: formdata.caption,
      }),
    })
      .then((response) => {
        if (response.status == 201) return response.json();
        else return "error";
      })
      .then((data) => {
        if (data != "error") {
          props.updateposts([formdata,...props.memes]);
          setFormdata({
            name: "",
            url: "",
            caption: "",
          });
        }
      });
  };
  return (
    <div className="post-meme">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(name);
        }}
      >
        <div className="inputcontainer">
          <h3>NAME</h3>
          <div className="inputbox">
            <input
              type="text"
              value={formdata.name}
              onChange={(e) => {
                setFormdata({ ...formdata, name: e.target.value });
              }}
            ></input>
          </div>
        </div>
        <div className="inputcontainer">
          <h3>CAPTION</h3>
          <div className="inputbox">
            <input
              type="text"
              value={formdata.caption}
              onChange={(e) => {
                setFormdata({ ...formdata, caption: e.target.value });
              }}
            ></input>
          </div>
        </div>
        <div className="inputcontainer">
          <h3>IMAGE URL</h3>
          <div className="inputbox">
            <input
              type="text"
              value={formdata.url}
              onChange={(e) => {
                setFormdata({ ...formdata, url: e.target.value });
              }}
            ></input>
          </div>
        </div>
      </form>
      <div className="btn-container">
        <p className="post-button" onClick={postMeme}>
          POST
        </p>
      </div>
    </div>
  );
}

export default Form;
