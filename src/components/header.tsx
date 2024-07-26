import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="header">
      <li onClick={() => navigate("/")}>Imenik zaposlenika</li>
      <li onClick={() => navigate("/dijagram")}>Organizacijski dijagram</li>
    </nav>
  );
};

export default Header;
