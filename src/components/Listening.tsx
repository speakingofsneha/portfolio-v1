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
  link: "https://open.spotify.com/track/5JInU1luIwpnMRU2DDollP?si=502f6db6674e489f",
};

const ListeningTo = () => {
  return (
    <div>
      <span className="currently-header">currently listening to:</span>
      <div id="album">
        <div id="cover"> </div>
        <div id="vinyl"> </div>
      </div>
      <div id="currently-info">
        <a id="track-link" href={TRACK.link} target="_blank" rel="noopener noreferrer"> </a>
        <span>Flowers R. Blooming</span>
        <span>by Peter Cat Recording Co.</span>
        <span id="track-listening" style={{ opacity: 0.4 }}>
          {getCurrentDateTimeCaption()}
        </span>
      </div>
    </div>
  );
};

export default ListeningTo;