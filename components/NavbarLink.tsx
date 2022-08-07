import styled from 'styled-components';

interface NavbarLinkProps {
  title: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ title }) => {
  return (
    <NavLink>
      <h4>{title}</h4>
    </NavLink>
  );
};

export default NavbarLink;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #333;
  height: 100%;
  text-decoration: none;
  padding: 0 1.5625rem;
  transition: color 100ms;
  color: #999;
  cursor: pointer;
  :hover {
    color: #fff;
  }
  :last-of-type {
    border-right: 1px solid #333;
  }
  > h4 {
    font-size: 0.875rem;
    letter-spacing: 1px;
  }
`;
