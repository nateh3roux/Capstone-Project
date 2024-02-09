import NavigationItem from "./NavigationItem";

function NavigationBar() {
  const navigation = [
    { title: "Home", link: "/" },
    { title: "All Products", link: "products" },
    { title: "Cart", link: "cart" },
<<<<<<< HEAD
   
  ];
  return (
    <nav>
      <ul>
=======
  ];
  return (
    <nav>
      <ul className="nav-bar-ul">
>>>>>>> a05c306055388bd60cacfd689d19ea30effe66eb
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
