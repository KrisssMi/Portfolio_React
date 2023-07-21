import "./style.css";

import vk from "./../../image/icons/VK.svg";
import instagram from "./../../image/icons/Instagram.svg";
import linkedIn from "./../../image/icons/LinkedIn.svg";
import twitter from "./../../image/icons/Twitter.svg";
import gitHub from "./../../image/icons/GitHub.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://vk.com/mnvch_krstn">
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.instagram.com/_m.krisss_/">
                <img src={instagram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://twitter.com/_KrisMi_">
                <img src={twitter} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/KrisssMi">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.linkedin.com/in/kristina-minevich-321142232">
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2023 Krisss</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
