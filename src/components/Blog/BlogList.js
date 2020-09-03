import React, { useState, useEffect } from "react";
import axios from "../APIs/truecaller";
import Post from "./Post";
import { Button } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
const BlogList = () => {
  const [posts, setposts] = useState([]);
  const [next, setNext] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      let res = await axios.get("/posts", {
        params: {
          number: 25,
          order_by: "date",
        },
      });
      setposts(res.data.posts);
      setNext(res.data.meta.next_page);
    };
    fetchPosts();
  }, []);

  const loadMore = async () => {
    setNext(null);
    let res = await axios.get("/posts", {
      params: {
        number: 25,
        order_by: "date",
        page_handle: next,
      },
    });
    console.log(res);
    setposts([...posts, ...res.data.posts]);
    setNext(res.data.meta.next_page);
  };

  let renderPosts = posts.map((post) => (
    <Post
      title={post.title}
      thumbnail={post.post_thumbnail.URL}
      date={post.date}
      content={post.content}
      tags={post.categories}
      key={post.ID}
      id={post.ID}
    ></Post>
  ));

  return (
    <div>
      {renderPosts}
      {next ? (
        <Button
          className="d-block mx-auto my-5"
          variant="outlined"
          color="primary"
          onClick={loadMore}
        >
          Load More
        </Button>
      ) : (
        <CircularProgress className="d-block mx-auto my-5" />
      )}
    </div>
  );
};

export default BlogList;
