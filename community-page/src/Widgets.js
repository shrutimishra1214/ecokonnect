import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Ecotizens" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h4>Advertisement</h4>
        <img src="ad1.jpeg" width="300" height="400"></img>
      </div>
    </div>
  );
}

export default Widgets;
