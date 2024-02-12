import { useNavigate } from "react-router-dom";
const Header = ({ title, logoUrl }) => {
  const navigate = useNavigate();
  return (
    <div id="header-div">
      <img
        src="/src/images/Just_One_Byte.png"
        id="logo"
        onClick={() => {
          navigate(`/`);
        }}
      ></img>
      <h1 id="site-title">{title}</h1>
      <div id="empty-header"></div>
    </div>
  );
};

export default Header;
