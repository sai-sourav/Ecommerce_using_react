import React from "react";
import { Container, Navbar} from "react-bootstrap";

import "./Footer.css";

import facebookLogo from "../../images/about/Facebook Logo.png";
import spotifyLogo from "../../images/about/Spotify Logo.png";
import youtubeLogo from "../../images/about/youtube.jpg";

export default function Footer() {
  return (
    <Navbar bg="dark" expand="sm">
      <Container>
        <h2 className="footer-title">The Generics</h2>
        <div className="footer-icons">
          <ul>
            <li>
              <a href="https://www.youtube.com">
                <img src={youtubeLogo} alt=""></img>
              </a>
            </li>
            <li>
              <a href="https://spotify.com">
                <img src={spotifyLogo} alt=""></img>
              </a>
            </li>
            <li>
              <a href="https://facebook.com">
                <img src={facebookLogo} alt=""></img>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
}
