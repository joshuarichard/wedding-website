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
    q: 'Are kids allowed?',
    a: 'Absolutely, but it will not be an event tailored to children. Childcare will not be provided, and children should be supervised.',
  },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const QuestionWrapper = styled.div`
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
  text-align: center;
`;

const Answer = styled.p`
  font-size: 1em;
  padding: 1rem 6rem;
`;

const QAndA = () => {
  return (
    <Wrapper>
      <QuestionWrapper>
        {questions.map((e, i) => (
          <Fragment key={i}>
            <Question>{e.q}</Question>
            <Answer>{e.a}</Answer>
          </Fragment>
        ))}
      </QuestionWrapper>
    </Wrapper>
  );
};

export default QAndA;
