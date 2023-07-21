import "./style.css";
import vector from "./Vector.svg";

const BtnGitHub = ({ link }) => {
  return (
    <>
      <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
        <img src={vector} alt="Link" />
        GitHub repository
      </a>
    </>
  );
};

export default BtnGitHub;
