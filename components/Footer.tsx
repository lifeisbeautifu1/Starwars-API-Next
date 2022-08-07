import styled from 'styled-components';
import { SocialLinks } from './';

const Footer = () => {
  return (
    <FooterContainer>
      <p>FOLLOW STAR WARS:</p>
      <SocialLinks />
      <Copyright>TM & © Lucasfilm Ltd. All Rights Reserved</Copyright>
      <FooterLinksContainer>
        <a href="/" target="_blank">
          Terms of Use
        </a>
        <a href="/" target="_blank">
          Additional Content Information
        </a>
        <a href="/" target="_blank">
          Privacy Policy
        </a>
        <a href="/" target="_blank">
          Children's Online Privacy Policy
        </a>
        <a href="/" target="_blank">
          Your California Privacy Rights
        </a>
        <a href="/" target="_blank">
          Star Wars at shopDisney
        </a>
        <a href="/" target="_blank">
          Star Wars Helpdesk
        </a>
        <a href="/" target="_blank">
          Interest-Based Ads
        </a>
        <a href="/" target="_blank">
          Do Not Sell My Info
        </a>
      </FooterLinksContainer>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  margin-top: 4.375rem;
  width: 100%;
  display: grid;
  place-items: center;
  background-color: #000;
  padding: 1.25rem;
  color: #fff;
  background-image: url('https://static-mh.content.disney.io/starwars/assets/footer/vader_2-86e8fdb4e26d.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  position: absolute;
  > p:first-child {
    margin: 4rem 0 1.375rem;
    line-height: normal;
    color: #ccc;
    font-size: 0.875rem;
  }
`;
const Copyright = styled.div`
  font-size: 0.875rem;
  color: #ccc;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
`;
const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.625rem;
  }

  > a {
    padding: 0 11px 0 0.75rem;
    color: #ccc;
    font-size: 0.875rem;
    line-height: normal;
    text-decoration: none;
    margin: 0.375rem 0 0;

    ::after {
      content: '';
      width: 40%;
      display: block;
      margin: 0 auto;
      opacity: 0.9;
      border-bottom: 1px solid transparent;

      transition: border-color 200ms, width 250ms;
    }

    :hover::after {
      width: 100%;
      border-bottom-color: #fff;
    }
  }
  > a:not(:last-child) {
    border-right: 1px solid #ccc;

    @media (max-width: 768px) {
      border-right: none;
    }
  }
`;
