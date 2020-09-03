import React, { useState, useEffect } from "react";
import axios from "../APIs/truecaller";
import { Link } from "react-router-dom";
const RelatedCard = ({ id }) => {
  const [content, setcontent] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      let res = await axios.get(`posts/${id}`);
      setcontent(res.data);
    };
    fetchPost();
  }, [id]);

  return content ? (
    <div className="card col-sm-12 flex-row my-3 related-card pl-0">
      <img
        className="card-img-top"
        src={content.post_thumbnail.URL}
        alt="Card img cap"
      />
      <div className="card-body ">
        <h5 className="card-title">{content.title}</h5>
        <Link to={`/post/${content.ID}`} className="btn btn-primary">
          View
        </Link>
      </div>
    </div>
  ) : null;
};

export default RelatedCard;
