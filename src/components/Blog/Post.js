import React from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  media: {
    height: 300,
    objectFit: "cover",
  },
});

const Post = ({ title, thumbnail, date, content, tags, id }) => {
  if (content.length > 300) content = content.slice(0, 300) + "...";

  const classes = useStyles();

  let renderTags = Object.keys(tags).map((tag) => (
    <button className="bg-transparent border-0 mx-2">#{tag}</button>
  ));

  return (
    <React.Fragment>
      <Card className={classes.root + " mt-5"}>
        <CardMedia
          className={classes.media}
          image={thumbnail}
          title="something about the thumbnail"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p"> */}
          {parse(content)}
          {/* </Typography> */}
        </CardContent>
        <CardActions className="d-flex align-items-baseline justify-content-between">
          <div className="d-flex align-items-baseline ">
            <Button size="small" color="primary">
              <Link to={`/post/${id}`}>View</Link>
            </Button>
            <p className="text-muted">{moment(date).fromNow()}</p>
          </div>
          <div className="d-block">{renderTags}</div>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default Post;
