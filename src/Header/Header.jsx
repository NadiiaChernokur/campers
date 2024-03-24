import { NavLink, Outlet } from 'react-router-dom';
import { HeaderCintainer, LogoDiv, Nav } from './Header.styles';

const Header = () => {
  return (
    <>
      <HeaderCintainer>
        <LogoDiv>
          <svg width={10} height={10}>
            <use></use>
          </svg>
          <NavLink to="/">Booking campers</NavLink>
          <svg width={10} height={10}>
            <use></use>
          </svg>
        </LogoDiv>
        <Nav>
          <NavLink to="/campers">Autos</NavLink>
          <NavLink to="/favorite">Favorite</NavLink>
        </Nav>
      </HeaderCintainer>
      <Outlet />
    </>
  );
};
export default Header;
