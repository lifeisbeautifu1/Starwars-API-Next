import styled from 'styled-components';
import type { NextPage } from 'next';
import { GetStaticProps, GetStaticPaths } from 'next';
import { CharacterCard } from '../../components';
import { ICharacter } from '../../interfaces';
import axios from 'axios';

interface CharacterProps {
  character: ICharacter;
}

const Character: NextPage<CharacterProps> = ({ character }) => {
  return (
    <CharacterContainer>
      <StarfieldLeft />
      <CharacterCard character={character} />
      <StarfieldRight />
    </CharacterContainer>
  );
};

export default Character;

export const getStaticProps: GetStaticProps = async (context) => {
  const { data: character } = await axios.get(
    `https://akabab.github.io/starwars-api/api/id/${context?.params?.id}`
  );
  return {
    props: {
      character,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: characters } = await axios.get(
    `https://akabab.github.io/starwars-api/api/all.json`
  );
  const paths = characters.map((c: ICharacter) => `/id/${c.id}.json`);
  return {
    paths,
    fallback: false,
  };
};

const CharacterContainer = styled.div`
  padding: 2.5rem;
  margin-top: 200px;
  @media (max-width: 768px) {
    margin-top: 300px;
  }
`;

const StarfieldLeft = styled.div`
  position: fixed;
  width: 100px;
  top: 0;
  background-repeat: repeat-y;
  left: 0;
  height: 1700px;
  background-position: left center;
  background-size: 100% auto;
  background-image: url(https://static-mh.content.disney.io/starwars/assets/background/bg_starsL-fd4661a3ccea.jpg);
`;

const StarfieldRight = styled.div`
  position: fixed;
  width: 100px;
  top: 0;
  background-repeat: repeat-y;
  right: 0;
  height: 1700px;
  background-position: right center;
  background-size: auto 100%;
  background-image: url(https://static-mh.content.disney.io/starwars/assets/background/bg_starsR-655c85e404d4.jpg);
`;
