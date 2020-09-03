import React, { useEffect } from "react";
import axios from "../APIs/truecaller";

const Post = (props) => {
  useEffect(() => {}, []);

  let { id } = props.match.params;
  return <div>{id}</div>;
};

export default Post;
