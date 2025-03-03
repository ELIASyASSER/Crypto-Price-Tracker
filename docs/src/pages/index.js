import "./index.css"; // Import the CSS file
import Link from "@docusaurus/Link";
export default function Home() {
  return (
    <div className="container">
      <div className="items">
        <h1 className="title">Welcome to Crypto Tracker 🚀</h1>
        <img src="/img/crypto.png" className="imgCover"/>
        <Link to="/docs/intro" className="button">📖 Read Documentation</Link>
      </div>
    </div>
  );
}
