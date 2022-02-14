import { Link } from "react-router-dom";

export default function About () {
  return (
    <div>
      <h2>A propos</h2>
      <Link to="/">
        Aller à la page d&apos;accueil
      </Link>
    </div>
  );
}
