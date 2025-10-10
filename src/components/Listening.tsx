import React from "react";
import "../styles/currently.scss";

function getCurrentDateTimeCaption() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const dateString = now.toDateString();
  return `${hours}:${minutes}, ${dateString}`;
}

const TRACK = {
  image: "/images/petercat.jpg",
  // Updated link
  link: "https://open.spotify.com/track/5JInU1luIwpnMRU2DDollP?nd=1&dlsi=f6ad4a712ec04f6f",
};

const ListeningTo = () => {
  const handleClick = () => {
    window.open(TRACK.link, "_blank");
  };

  return (
    <div>
      <span className="currently-header" style={{ fontWeight: 400 }}>Listening to</span>
      <div id="album" onClick={handleClick} role="link" tabIndex={0}>
        <div id="cover"></div>
        <div id="vinyl"></div>
      </div>
      <div id="currently-info">
        {/* Optional: you can still keep this text info with timestamp */}
        {/* <span>Flowers R. Blooming</span>
        <span>by Peter Cat Recording Co.</span>
        <span id="track-listening" style={{ opacity: 0.4 }}>
          {getCurrentDateTimeCaption()}
        </span> */}
      </div>
    </div>
  );
};

export default ListeningTo;
