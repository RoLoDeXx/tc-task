import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import axios from "../APIs/truecaller";

const SideContent = () => {
  const [state, setstate] = useState(null);
  useEffect(() => {
    const fetchCategories = async () => {
      let res = await axios.get("/categories", {
        params: { order_by: "count" },
      });
      console.log(res);
    };
    fetchCategories();
  }, []);

  return (
    <div className="mt-5 d-none d-md-block">
      <img className="spam-img" src={require("../../spam.jpg")} />
      <div className="d-flex align-items-center mt-3">
        <a href="https://play.google.com/store/apps/details?id=com.truecaller&referrer=utm_source%3Dblogbanner&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
          <img
            className="play-link"
            alt="Get it on Google Play"
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          />
        </a>
        <span className="phone fa fa-phone"></span>
      </div>

      <p>Categories</p>
    </div>
  );
};

export default SideContent;
