import { Link } from "react-router-dom";

const NavigationItem = ({ link, title }) => {
  return (
    <li>
<<<<<<< HEAD
      <Link to={link}>{title}</Link>
=======
      <Link to={link} className={"link-styles"}>
        {title}
      </Link>
>>>>>>> a05c306055388bd60cacfd689d19ea30effe66eb
    </li>
  );
};

export default NavigationItem;
