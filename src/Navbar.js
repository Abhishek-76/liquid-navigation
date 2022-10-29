import { CgProfile } from "react-icons/cg";
import { AiOutlineCode } from "react-icons/ai";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="nav-menu-footer">
      <ul className="nav--list">
        <Link activeClass="active" spy to="about" className="nav-link">
          <CgProfile className="nav-icon" />
          <span className="nav-name">About</span>
        </Link>

        <Link activeClass="active" spy to="project" className="nav-link">
          <AiOutlineCode className="nav-icon" />
          <span className="nav-name">Projects</span>
        </Link>

        <Link activeClass="active" spy to="contact" className="nav-link">
          <MdOutlineConnectWithoutContact className="nav-icon" />
          <span className="nav-name">Contact</span>
        </Link>

        <svg
          className="indicator"
          width="94"
          height="56"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="47" cy="28" rx="24" ry="28" />
          <path d="M24 20C24 20 28 55.9999 48 56L0 55.9997C18 55.9998 24 20 24 20Z" />
          <path d="M70 20C70 20 66 55.9999 46 56L94 55.9997C76 55.9998 70 20 70 20Z" />
        </svg>
      </ul>
    </div>
  );
}
