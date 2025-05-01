import "../styles/currently.scss";

function getCurrentDateTimeCaption() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const dateString = now.toDateString();
  return `${hours}:${minutes}, ${dateString}`;
}

const TRACK = {
  title: "Flowers R. Blooming",
  artist: "Peter Cat Recording Co.",
  image: "images/petercat.jpg", // album cover 
  link: "https://open.spotify.com/track/5JInU1luIwpnMRU2DDollP?si=502f6db6674e489f", // spotify link
};

const ListeningTo = () => {
  return (
    <div>
      <span className="currently-header">Currently listening to:</span>
      <div id="currently-container">
        <a
          id="track-link"
          href={TRACK.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            id="currently-image"
            src={TRACK.image}
            className="sidebar_asset"
            alt={TRACK.title}
          />
        </a>
        <div id="currently-info">
          <span id="track-title">{TRACK.title}</span>
          <span id="track-artist">by {TRACK.artist}</span>
          <span id="track-listening" style={{ opacity: 0.4 }}>
            {getCurrentDateTimeCaption()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ListeningTo;
