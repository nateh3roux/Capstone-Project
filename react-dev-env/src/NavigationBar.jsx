import NavigationItem from "./NavigationItem";

function NavigationBar() {
  const navigation = [
    { title: "Home", link: "/" },
    { title: "All Products", link: "products" },
    { title: "Cart", link: "cart" },
  ];
  return (
    <nav>
      <ul className="nav-bar-ul">
        {navigation.map((navItem, index) => (
          <NavigationItem
            key={index}
            link={navItem.link}
            title={navItem.title}
          />
        ))}
      </ul>
    </nav>
  );
}

export default NavigationBar;
