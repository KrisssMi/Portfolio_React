import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Kristina</em>
          </strong>
          <br />a backend and frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href="./image/KristinaMinevich_CV.docx" className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
