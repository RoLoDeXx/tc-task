import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import axios from "../APIs/truecaller";
import { ListItem, List, ListItemText, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
const SideContent = () => {
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      let res = await axios.get("/categories");
      setCategories(res.data.categories);
    };

    const fetchTags = async () => {
      let res = await axios.get("/tags", {
        params: {
          order_by: "count",
          number: 10,
        },
      });
      setTags(res.data.tags);
    };

    fetchCategories();
    fetchTags();
  }, []);

  let renderCategories = categories.map((item) => (
    <ListItem key={item.ID}>
      <ListItemText>
        <Link to={`/categories/${item.slug}`}>{item.slug}</Link>
      </ListItemText>
    </ListItem>
  ));

  let renderTags = tags.map((item) => (
    <ListItem key={item.ID}>
      <ListItemText>
        <Link to={`/tags/${item.slug}`}>{"#" + item.slug}</Link>
      </ListItemText>
    </ListItem>
  ));

  return (
    <div className="mt-5 d-none d-md-block">
      <img className="w-100" src={require("../../spam.jpg")} alt="tc-img" />
      <div className="d-flex align-items-center mt-3 justify-content-between">
        <a href="https://play.google.com/store/apps/details?id=com.truecaller&referrer=utm_source%3Dblogbanner&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
          <img
            className="play-link"
            alt="Get it on Google Play"
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          />
        </a>
        <span className="phone fa fa-phone"></span>
      </div>

      <Divider />
      <Typography variant="h5" color="initial" className="mt-4">
        Categories{" "}
        <span role="img" aria-label="fire">
          🌀
        </span>
      </Typography>

      <List component="nav" aria-label="Categories">
        {renderCategories}
      </List>
      <Divider />
      <Typography variant="h5" color="initial" className="mt-4">
        Trending Tags{" "}
        <span role="img" aria-label="fire">
          🔥
        </span>
      </Typography>

      <List component="nav" aria-label="Categories">
        {renderTags}
      </List>
    </div>
  );
};

export default SideContent;
