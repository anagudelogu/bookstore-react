import { useState } from 'react';
import {
  StyledNav,
  MainTitle,
  NavigationLinks,
  NavigationLinksContainer,
  StyledNavLink,
  UserIcon,
  HamburgerIcon,
  CloseIcon,
} from './styledNavComponents';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <StyledNav>
      <MainTitle>Bookstore CMS</MainTitle>
      {isOpen ? (
        <CloseIcon onClick={handleClose} />
      ) : (
        <HamburgerIcon onClick={handleOpen} />
      )}
      <NavigationLinksContainer className={isOpen ? 'open' : null}>
        <NavigationLinks>
          <StyledNavLink to="/" onClick={handleClose}>
            BOOKS
          </StyledNavLink>
          <StyledNavLink to="/categories" onClick={handleClose}>
            CATEGORIES
          </StyledNavLink>
        </NavigationLinks>
        <UserIcon />
      </NavigationLinksContainer>
    </StyledNav>
  );
};

export default Navbar;
