
import MenuButton from "./menuButton";
const Menu = () => {
  const menuItems = [
    { name: "Classes", icon: "class-icon" },
    { name: "Services", icon: "services-icon" },
    { name: "Facilities", icon: "facilities-icon" },
    { name: "Volunteer", icon: "volunteer-icon" },
    { name: "Membership", icon: "membership-icon" },
    { name: "Events", icon: "events-icon" },
    { name: "About", icon: "about-icon" },
  ];
  return (
    <menu className="">
      <div className="2xl:grid 2xl:grid-cols-4 2xl:grid-rows-2 gap-2 content-center">
        
        {menuItems.map((item,key) => (
          <MenuButton key={key} name={item.name} icon={item.icon} />
        ))}
      </div>
    </menu>
  );
};

export default Menu;
