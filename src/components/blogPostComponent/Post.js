import React from "react";
import "./blockPost.css";

const Post = (props) => {
  const data = props.data;
  console.log(data.title);
  return (
    <div className="post-item">
      <img src={data.src}></img>
      <span>{data.day}</span>
      <p>{data.title}</p>
      <span>{data.content}</span>
      <div className="read-more">READ MORE</div>
    </div>
  );
};

export default Post;
