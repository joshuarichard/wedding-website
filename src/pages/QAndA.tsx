import { Fragment } from 'react';
import styled from 'styled-components';

import { colors } from '../styles';

const questions: {
  q: string;
  a: string;
}[] = [
  {
    q: "How 'outdoors' will it be?",
    a: "Outdoors! The property has been in Claudia's family for 120 years. It is very much an agricultural farm. The ground is as flat as real ground can be.",
  },
  {
    q: 'Will there be alchohol?',
    a: 'Wine, beer, and hard seltzer will be provided.',
  },
  {
    q: 'Is there a set end time?',
    a: 'We are aiming for a little before midnight.',
  },
  {
    q: "Which city is also known as 'Chair City'",
    a: 'Gardner, Massachusetts',
  },
  {
    q: "In 1940, Gardner, Massachusetts' slogan was what?",
    a: '"The World Rests on Gardner, Mass., Chairs"',
  },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const QAListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 16rem;

  @media only screen and (max-width: 768px) {
    margin: 0 2rem;
  }
`;

const Question = styled.div`
  font-size: 1.4em;
  font-weight: 300;
  padding: 0.7rem 1rem;
  color: ${colors.text.opaque};
`;

const Answer = styled.p`
  font-size: 1em;
  padding: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgWrapper = styled.div`
  display: flex;
`;

const Img = styled.img`
  border-radius: 10px;
  height: auto;
  width: 100%;
  margin: 1rem;

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

const QAndA = () => {
  return (
    <Wrapper>
      <QAListWrapper>
        {questions.map((e, i) => (
          <Fragment key={i}>
            <Question>{e.q}</Question>
            <Answer>{e.a}</Answer>
          </Fragment>
        ))}
        <Question>{"Built in 1905, where was the first 'Biggest Chair in the World'?"}</Question>
        <ImgWrapper>
          <Img src="/pictures/worlds_biggest_chair.png" />
          <Img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Biggest_Chair%2C_Gardner%2C_MA.jpg" />
        </ImgWrapper>
      </QAListWrapper>
    </Wrapper>
  );
};

export default QAndA;
