import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isUserActive, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
    navigate("/");
  };

  if (isUserActive === true) {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/games">Games Gallery</Link>
        <Link to="/my-profile">My profile</Link>
        <button className="button" onClick={handleLogout}>Log out</button>
      </div>
    );
  } else {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/games">Games Gallery</Link>
        <Link to="/signup">Registro</Link>
        <Link to="/login">Acceder</Link>
      </div>
    );
  }
}

export default Navbar;
