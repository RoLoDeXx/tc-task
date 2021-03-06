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
  const [loading, setLoadind] = useState(true);
  const [posts, setposts] = useState([]);
  const [next, setNext] = useState(0);

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
      setLoadind(false);
    };
    fetchPosts();
  }, [cid, tid]);

  const loadMore = async () => {
    setLoadind(true);
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
    setLoadind(false);
    if (next === res.data.meta.next_page) setNext(null);
    else setNext(res.data.meta.next_page);
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

  return (
    <div>
      {renderPosts}

      {loading !== true && next !== null && (
        <Button
          className="d-block mx-auto my-5"
          variant="outlined"
          color="primary"
          onClick={loadMore}
        >
          Load More
        </Button>
      )}

      {loading && (
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

      {found === 0 && (
        <Typography variant="h5" color="initial" className="mt-5">
          That's about it
        </Typography>
      )}
    </div>
  );
};

export default BlogList;
