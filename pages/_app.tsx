import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react';
import { SharedLayout } from '../components';
import { Circle } from 'better-react-spinkit';
import styled from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {loading ? (
        <AppLoading>
          <AppLoadingContents>
            <img
              src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
              alt="StarWars"
            />
            <Circle size={60} color="#edec51" />
          </AppLoadingContents>
        </AppLoading>
      ) : (
        <SharedLayout>
          <Component {...pageProps} />
        </SharedLayout>
      )}
    </>
  );
}

export default MyApp;

const AppLoading = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    object-fit: contain;
    height: 150px;
    margin-bottom: 1.25rem;
    filter: brightness(0) invert(1);
  }
`;
