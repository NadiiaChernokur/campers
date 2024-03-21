import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <svg>
          <use></use>
        </svg>
        <nav>
          <NavLink to="/campers">Autos</NavLink>
          <NavLink to="/favorite">Favorite</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
export default Header;
