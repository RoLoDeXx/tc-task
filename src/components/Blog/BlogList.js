import React, { useState, useEffect } from "react";
import axios from "../APIs/truecaller";
import Post from "./Post";
import { Button, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
const BlogList = (props) => {
  let cid = null,
    tid = null;
  if (props.match.params.tagid) tid = props.match.params.tagid;
  if (props.match.params.catid) cid = props.match.params.catid;

  const [found, setFound] = useState(null);
  const [posts, setposts] = useState([]);
  const [next, setNext] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      let res = await axios.get("/posts", {
        params: {
          number: 25,
          order_by: "date",
          tag: tid,
          category: cid,
        },
      });
      console.log(res.data);
      setposts(res.data.posts);
      setFound(res.data.found);
      setNext(res.data.meta.next_page);
    };
    fetchPosts();
  }, [cid, tid]);

  const loadMore = async () => {
    setNext(null);
    let res = await axios.get("/posts", {
      params: {
        number: 25,
        order_by: "date",
        tag: tid,
        category: cid,
        page_handle: next,
      },
    });
    setFound(res.data.found);
    setposts([...posts, ...res.data.posts]);
    if (next === res.data.meta.next_page) setNext(res.data.meta.next_page);
    else setNext(null);
  };

  let renderPosts = posts.map((post) =>
    post.post_thumbnail ? (
      <Post
        title={post.title}
        thumbnail={post.post_thumbnail.URL}
        date={post.date}
        content={post.excerpt}
        categories={post.categories}
        key={post.ID}
        id={post.ID}
      ></Post>
    ) : (
      <Post
        title={post.title}
        // thumbnail={post.post_thumbnail.URL}
        date={post.date}
        content={post.excerpt}
        categories={post.categories}
        key={post.ID}
        id={post.ID}
      ></Post>
    )
  );

  if (found === 0)
    return (
      <Typography variant="h5" color="initial" className="mt-5">
        That's about it
      </Typography>
    );
  else
    return (
      <div>
        {renderPosts}

        {next !== null ? (
          <Button
            className="d-block mx-auto my-5"
            variant="outlined"
            color="primary"
            onClick={loadMore}
          >
            Load More
          </Button>
        ) : (
          <div className="mt-5">
            <Skeleton variant="rect" height={400} />
            <Skeleton variant="text" width={170} height={50} />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </div>
        )}
      </div>
    );
};

export default BlogList;
