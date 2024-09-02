import "./Curvedline.scss";

function CurvedLine() {
  return (
    <div id="curvedLine">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="-150 -890 300 200">
        <defs>
          <linearGradient id="gradient" x1="0%" x2="100%">
            <stop offset="40%" stopColor="#00FFFF" />
            <stop offset="50%" stopColor="#D400FF" />
          </linearGradient>
        </defs>
        <circle
          cx="100"
          cy="100"
          r="880"
          stroke="url(#gradient)"
          strokeWidth="1"
          fill="transparent"
        />
      </svg>
    </div>
  );
}

export default CurvedLine;
