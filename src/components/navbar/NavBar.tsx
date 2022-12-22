import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const NavBar = () => {
  const navigate = useNavigate();
  const goPage = (path: string) => {
    navigate(`/${path}`);
  };
  return (
    <Navbar fluid={true} rounded={true}>
      <Link to="/">
      <div className="flex">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Pokemon
        </span>
      </div>
      
      </Link>

      <Navbar.Toggle />
      <Navbar.Collapse></Navbar.Collapse>
    </Navbar>
  );
};
