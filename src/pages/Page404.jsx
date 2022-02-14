import { Link } from "react-router-dom";

export default function Page404 () {
  return (
    <div>
      <h2>404</h2>
      <Link to="/">
        Aller à la page d&apos;accueil
      </Link>
    </div>
  );
}
