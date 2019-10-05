import React from "react";
import "./index.css";

const PostItem = ({ title, body }) => (
  <section>
    <h3 data-test="title">{title}</h3>

    <p data-test="postBody">{body}</p>
  </section>
);

export default PostItem;
