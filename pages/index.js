import React from 'react';

import { useRouter } from 'next/router';

import styled from 'styled-components';
import db from '../db.json';

import Form from '../src/components/Form';

import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

export const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const [name, setName] = React.useState('');
  const router = useRouter();

  const startGame = (event) => {
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
  };

  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
              <Form onSubmit={startGame}>
                <input
                  type="text"
                  placeholder="Digite o seu nome bruxo"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <button type="submit" disabled={name.length === 0}>
                  Jogar
                </button>
              </Form>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Content>
              <h2>Quizes da Galera</h2>
              <p>Quiz</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/mvcbotelho/alura-quiz" />
      </QuizBackground>
    </>
  );
}
