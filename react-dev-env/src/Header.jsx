const Header = ({ title, logoUrl }) => {
  return (
    <div id="header-div">
      <img src="/src/images/Just_One_Byte.png" id="logo"></img>
      <h1 id="site-title">{title}</h1>
      <div id="empty-header"></div>
    </div>
  );
};

export default Header;
