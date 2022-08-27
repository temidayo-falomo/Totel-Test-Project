import { MdOutlineFacebook } from "react-icons/md";
import { RiInstagramLine, RiLinkedinBoxFill } from "react-icons/ri";
import { VscTwitter } from "react-icons/vsc";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="col">
          <h2>Totel</h2>
          <div className="social col gap">
            <p>Social Links</p>
            <div className="row between">
              <RiInstagramLine />
              <VscTwitter />
              <MdOutlineFacebook />
              <RiLinkedinBoxFill />
            </div>
          </div>
        </div>
        <div className="col">
          <h5>About Totel</h5>
          <ul>
            <li>Who We Are (Team)</li>
            <li>Blog</li>
            <li>Work With Us</li>
            <li>Team</li>
          </ul>
        </div>
        <div className="col">
          <h5>Learn More</h5>
          <ul>
            <li>Privacy</li>
            <li>Security</li>
            <li>Terms</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className="col">
          <h5>Popular Locations</h5>
          <ul>
            <li>Miami</li>
            <li>DC</li>
            <li>LA</li>
          </ul>
        </div>
        <div className="col gap">
          <img src="./play-store.svg" alt="" className="download" />
          <img src="./app-store.svg" alt="" className="download" />
        </div>
      </div>
      <div className="footer-text">
        <p>
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2022 @ Totel Ltd. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
