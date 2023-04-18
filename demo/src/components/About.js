import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <Link to="/about/profile">Profile</Link>
    </>
  );
}
