import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar flex justify-between items-center p-4 ">
      {/* Logo */}
      <img
        src="./logo.png"
        alt="Logo"
        style={{ marginLeft: "80px", width: "200.91px", height: "50.26px" }}
      />
      {/* Navigation Links */}
      <div className="nav-links flex justify-start items-center gap-6 p-4 ">
  <Link to="/">SEARCH</Link>
  {/* External link to Website */}
  <a href="https://girmantech.com" >
    WEBSITE
  </a>

  {/* Internal link to LinkedIn */}
  <a
    href="https://www.linkedin.com/company/girmantech/posts/?feedView=all"
  >
    LINKEDIN
  </a>

  {/* Open default email client for Contact */}
  <a href="mailto:contact@girmantech.com">CONTACT</a>
</div>

    </nav>
  );
}

export default Navbar;
