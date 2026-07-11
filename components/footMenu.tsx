import FootMenuButton from "./footMenuButton";

const FootMenu = () => {
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
    <menu className="w-2/4">
      <div className="grid 2xl:grid-cols-2 gap-6 content-center text-2xl 2xl:text-3xl font-bold">
        
        {menuItems.map((item,key) => (
          <FootMenuButton key={key} name={item.name} icon={item.icon} />
        ))}
      </div>
    </menu>
    );
}

export default FootMenu;