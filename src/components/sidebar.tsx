import logo from "../assets/orqafpv-logo.svg";
import chartIcon from "../assets/sidebar-icons/chart.svg";
import homeIcon from "../assets/sidebar-icons/home.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState<string | null>("Home");

  return (
    <div className="sidebar">
      <div onClick={() => navigate("/")} className="logo">
        <img src={logo} alt="Zwook Logo Image" className="logo__img" />
      </div>

      <nav className="navigation">
        <div
          onClick={() => {
            navigate(`/`);
            setActiveItem("Home");
          }}
          key="Home"
          className={`navigation__items $${
            activeItem === "Home" ? "active" : ""
          }`}
          aria-current={activeItem === "Home" ? "page" : undefined}
          aria-label="Home"
        >
          <div className="navigation__items__main">
            <img
              className="navigation__items__main__icon"
              src={homeIcon}
              alt="Home Icon"
            />
            <p className={`navigation__items__main__label `}>Home/Employees</p>
          </div>
        </div>
        <div
          onClick={() => {
            navigate(`/employees/diagram`);
            setActiveItem("Diagram");
          }}
          key="Diagram"
          className={`navigation__items $${
            activeItem === "Diagram" ? "active" : ""
          }`}
          aria-current={activeItem === "Diagram" ? "page" : undefined}
          aria-label="Diagram"
        >
          <div className="navigation__items__main">
            <img
              className="navigation__items__main__icon"
              src={chartIcon}
              alt="Diagram chart Icon"
            />
            <p className={`navigation__items__main__label `}>
              Organization Diagram
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

{
  /* <div
  className="navigation__item"
  onClick={() => {
    navigate(`/employees/diagram`);
    setActiveItem("Home");
  }}
  key="Home"
>
  <img className="navigation__item__icon" src={chartIcon} alt="Chart Icon" />
  <p className={`navigation__item__label`}>Organization Chart</p>
</div>; */
}
