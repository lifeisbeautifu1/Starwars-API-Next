import { ICharacter } from '../interfaces';
import Link from 'next/link';
import styled from 'styled-components';

interface ICharacterProps {
  character: ICharacter;
}

const Character: React.FC<ICharacterProps> = ({ character }) => {
  return (
    <CharacterContainer>
      <Link href={`/id/${character.id}.json`}>
        <Image src={character.image} alt={character.name} />
      </Link>
      <Link href={`/id/${character.id}.json`}>
        <Heading>{character.name}</Heading>
      </Link>
      <Decal />
    </CharacterContainer>
  );
};

export default Character;

const CharacterContainer = styled.div`
  border-radius: 0.375rem;
  width: 266px;
  background-color: #282727;
  position: relative;
  transition: all 0.25s ease;
  overflow: hidden;
  z-index: 1;

  :hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  height: 300px;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
  border-bottom: 2px solid #9e4f60;
  cursor: pointer;
`;

const Heading = styled.h1`
  background-image: url('https://static-mh.content.disney.io/starwars/assets/shared/bg_hash_top@2x-1d6544f5cc3a.png');
  padding: 0.5rem;
  display: inline-block;
  color: #ddd;
  font-size: 1.0625rem;
  text-transform: uppercase;
  transition: color 125ms;
  cursor: pointer;

  :hover {
    color: #9e4f60;
  }
`;

const Decal = styled.div`
  background-image: url('https://static-mh.content.disney.io/starwars/assets/shared/decal@2x-937ac7c57dff.png');
  height: 47px;
  width: 47px;
  opacity: 0.06;
  position: absolute;
  bottom: -32px;
  right: 10px;
  background-size: 300% 200%;
  transform: scaleY(-1);
  background-position: -100% 0;
`;
