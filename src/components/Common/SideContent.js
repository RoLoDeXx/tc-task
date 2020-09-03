import React from "react";
import Typography from "@material-ui/core/Typography";
const SideContent = () => {
  return (
    <div className="mt-5 d-none d-md-block">
      <div className="d-flex aling-items-baseline">
        <Typography variant="h5" component="p" color="initial">
          Wonder who's calling ?
        </Typography>
        <span className="ml-5 phone fa fa-phone"></span>
      </div>
      <a href="https://play.google.com/store/apps/details?id=com.truecaller&referrer=utm_source%3Dblogbanner&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
        <img
          className="play-link"
          alt="Get it on Google Play"
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
        />
      </a>
    </div>
  );
};

export default SideContent;
