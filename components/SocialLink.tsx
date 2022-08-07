import styled from 'styled-components';

interface SocialLinkProps {
  image: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ image }) => {
  return (
    // @ts-ignore
    <Link href="/" image={image}>
      <span />
    </Link>
  );
};

export default SocialLink;

const Link = styled.a`
  transition: background-color 350ms;
  :hover > span {
    background-color: #ccc;
  }
  > span {
    display: block;
    background-color: #999;
    height: 21px;
    width: 21px;
    mask: ${(props) =>
      // @ts-ignore
      props.image && 'url(' + props.image + ') no-repeat 50% 50%'};
    transition: background-color 350ms;
  }
`;
