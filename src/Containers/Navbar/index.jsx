import { useState } from 'react';
import * as styled from './styledNavComponents';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <styled.Nav>
      <styled.MainTitle>Bookstore CMS</styled.MainTitle>
      {isOpen ? (
        <styled.CloseIcon onClick={handleClose} />
      ) : (
        <styled.HamburgerIcon onClick={handleOpen} />
      )}
      <styled.NavigationLinksContainer
        className={isOpen ? 'open' : null}
      >
        <styled.NavigationLinks>
          <styled.NavigationLink to="/" onClick={handleClose}>
            BOOKS
          </styled.NavigationLink>
          <styled.NavigationLink
            to="/categories"
            onClick={handleClose}
          >
            CATEGORIES
          </styled.NavigationLink>
        </styled.NavigationLinks>
        <styled.UserIcon />
      </styled.NavigationLinksContainer>
    </styled.Nav>
  );
};

export default Navbar;
