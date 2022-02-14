import { Link } from "react-router-dom";

export default function Home () {
  return (
    <div>
      <h2>Accueil</h2>
      <Link to="/a-propos">
        A propos de nous
      </Link>
    </div>
  );
}
