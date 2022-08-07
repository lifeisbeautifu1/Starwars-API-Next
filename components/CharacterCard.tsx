import { ICharacter } from '../interfaces';
import Head from 'next/head';
import type { NextPage } from 'next';
import styled from 'styled-components';

interface ICharacterCardProps {
  character: ICharacter;
}

const CharacterCard: NextPage<ICharacterCardProps> = ({ character }) => {
  const locations = [
    character?.bornLocation,
    character?.diedLocation,
    character?.homeworld,
  ];
  //   Remove any duplications
  const updateLocations = (value: string, index: number, self: string[]) => {
    return self.indexOf(value) === index;
  };
  return (
    <>
      <Head>
        <title>{character?.name} | Starwars.com</title>
      </Head>
      <CardContainer>
        <img src={character?.image} alt={character.name} />
        <CharacterInfo>
          <h1>{character?.name}</h1>
          <h4>{character?.affiliations.length > 0 && `AFFILIATIONS`}</h4>
          {character?.affiliations.map((a, index) => (
            <p key={index}>{a}</p>
          ))}
          <h4>{character?.apprentices?.length > 0 && `APPRENTICES`}</h4>
          {character?.apprentices?.map((a, index) => (
            <p key={index}>{a}</p>
          ))}
          <h4>
            {(character?.bornLocation && 'LOCATIONS') ||
              (character?.diedLocation && 'LOCATIONS') ||
              (character?.homeworld && 'LOCATIONS')}
          </h4>
          {locations.filter(updateLocations).map((location, index) => (
            <p key={index}>{location !== '' && location}</p>
          ))}
          <h4>GENDER</h4>
          <span>{character?.gender}</span>
          <h4>DIMENSIONS</h4>
          <span>HEIGHT: {character?.dimensions}m</span>
          <h4>SPECIES</h4>
          <span>{character?.species}</span>
          <h4>WIKI</h4>
          <a href={character?.wiki} target="_blank" rel="noreferrer">
            Read more about {character?.name}
          </a>
        </CharacterInfo>
      </CardContainer>
      ;
    </>
  );
};

export default CharacterCard;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 0.375rem;

  > img {
    border-top-left-radius: 0.375rem;
    border-bottom-left-radius: 0.375rem;
    width: 50vw;
    object-fit: contain;
    border-right: 2px solid #9e4f60;
    background-color: #151515;
  }
`;
const CharacterInfo = styled.div`
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
  width: 30vw;
  padding: 1.25rem;
  background-image: url('https://static-mh.content.disney.io/starwars/assets/shared/bg_hash@2x-bd5b31294ea9.png');
  background-size: 7px;
  background-repeat: repeat-x;
  background-origin: top left;
  background-color: #282727;

  > h1 {
    width: 100%;
    /* margin: 0 auto; */
    color: #ddd;
    font-size: 1.875rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 1.25rem;
  }
  > h4 {
    color: #ddd;
    font-weight: 500;
    margin-bottom: 0.625rem;
    margin-top: 1.25rem;
  }

  > p,
  a {
    color: #9e4f60;
    transition: color 125ms;
    text-transform: capitalize;
    text-decoration: none;
    :hover {
      color: rgb(183, 104, 121);
      cursor: pointer;
    }
  }

  > span {
    color: #aaa;
    text-transform: capitalize;
  }
`;
