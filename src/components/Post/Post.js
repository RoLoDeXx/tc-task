import React, { useState, useEffect } from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import parse from "html-react-parser";
import axios from "../APIs/truecaller";
import local from "../APIs/localBackend";
import RelatedCard from "./RelatedCard";
import { Divider } from "@material-ui/core";

const Post = (props) => {
  const useStyles = makeStyles({
    root: {
      width: "100%",
    },
    media: {
      height: "30rem",
      objectFit: "cover",
    },
  });

  const classes = useStyles();

  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);

  let { id } = props.match.params;
  useEffect(() => {
    const fetchPost = async () => {
      let res = await axios.get(`posts/${id}`);
      setPost(res.data);
    };

    const fetchRelated = async () => {
      let res = await local.post(`posts/${id}`);
      setRelated(res.data.hits.slice(0, 3));
    };
    fetchPost();
    fetchRelated();
  }, [id]);

  const renderRelated = related.map((item) => (
    <RelatedCard
      key={item.fields.post_id}
      id={item.fields.post_id}
    ></RelatedCard>
  ));

  return post ? (
    <div className="complete-post">
      <Card className={classes.root + " shadow-none mt-5"}>
        <CardMedia
          className={classes.media}
          image={post.featured_image}
          title="something about the thumbnail"
        />
        <CardContent className="px-0">
          <Typography gutterBottom variant="h4" component="h2">
            {post.title}
          </Typography>
          <p className="text-muted">
            <i class="far fa-edit mr-1"></i>
            {post.author.name}
          </p>
          <p className="text-muted">
            <i class="far fa-clock"></i> {moment(post.date).fromNow()}
          </p>

          {/* <Typography variant="body2" color="textSecondary" component="p"> */}
          <div>{parse(post.content)}</div>

          {/* </Typography> */}
        </CardContent>
        <CardActions className="d-flex align-items-baseline justify-content-between">
          <div className="d-flex align-items-baseline "></div>
          {/* <div className="d-block">{renderTags}</div> */}
        </CardActions>
      </Card>

      <Divider></Divider>

      <Typography variant="h5" color="initial" className="mt-5">
        Based on your preferences
      </Typography>

      <div className="mt-3">{renderRelated}</div>
    </div>
  ) : null;
};

export default Post;
