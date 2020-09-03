import React from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  media: {
    height: "30rem",
    objectFit: "cover",
  },
});

const Post = ({ title, thumbnail, date, content, categories, id }) => {
  if (content.length > 300) content = content.slice(0, 300) + "...";

  const classes = useStyles();

  let renderCategories = Object.keys(categories).map((cat) => (
    <button className="bg-transparent border-0 mx-2" key={cat}>
      {cat}
    </button>
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
            <Link to={`/post/${id}`} className="btn btn-primary text-white">
              View
            </Link>
            <p className="ml-2 text-muted">{moment(date).fromNow()}</p>
          </div>
          <div className="d-block">{renderCategories}</div>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default Post;
