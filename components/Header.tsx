import styled from 'styled-components';
import { SocialLinks } from './';
import Link from 'next/link';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <SocialLinks />
      </HeaderLeft>
      <Link href="/">
        <HeaderImage
          src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
          style={{ cursor: 'pointer' }}
          alt="StarWars"
        />
      </Link>
      <HeaderRight>
        <HeaderSearch>
          <input type="text" placeholder="Search Star Wars" />
          <img
            src="https://static-mh.content.disney.io/starwars/assets/navigation/icon_search-957a123fdb62.svg"
            alt="Search"
          />
        </HeaderSearch>
        <HeaderActions>
          <button>LOG IN</button>
          <span>//</span>
          <button>SIGN UP</button>
        </HeaderActions>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  padding: 1.25rem;
  padding-bottom: 0;
  background-image: url('https://static-mh.content.disney.io/starwars/assets/navigation/navigation_stars@2x-815223a7aade.jpg');
  background-position: contain;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const HeaderImage = styled.img`
  object-fit: contain;
  margin-top: -2.5rem;
  margin-bottom: -1.25rem;
  height: 180px;
  filter: brightness(0) invert(1);
`;
const HeaderLeft = styled.div``;
const HeaderRight = styled.div``;
const HeaderSearch = styled.div`
  border-radius: 0.25rem;
  background-color: #343434;
  box-shadow: none;
  border: none;
  position: relative;
  width: 248px;
  opacity: 0.7;
  height: 2.5rem;
  transition: opacity 350ms;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.625rem;

  :focus-within {
    opacity: 1;
  }

  > input {
    background: transparent;
    border: none;
    outline: none;
    font-weight: 400;
    font-family: inherit;
    font-size: 15px;
    color: white;

    ::placeholder {
      opacity: 1;
      color: gray;
    }
  }

  > img {
    object-fit: contain;
    height: 1.25rem;
    margin-right: -3rem;
  }
`;
const HeaderActions = styled.div`
  width: 100%;
  margin-top: 0.625rem;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > button {
    background-color: transparent;
    border: none;
    font-family: inherit;
    font-weight: 600;
    color: #999;
    font-size: 0.875rem;
    cursor: pointer;
    transition: color 200ms;
    letter-spacing: 0.125rem;

    :hover {
      color: #ccc;
    }
  }

  > span {
    color: #343434;
    font-size: 1.125rem;
    font-weight: 500;
    margin: 0 0.375rem 0 0.375rem;
  }
`;
