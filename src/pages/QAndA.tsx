import { Fragment } from "react";
import styled from "styled-components";

import { Hero } from "../components";

const questions: {
  q: string;
  a: string;
}[] = [
  {
    q: "Will it be outdoors?",
    a: "Yes, we'll be on the Elbourn family's agriculture farm. The ground is flat but it is ground, so if you wear high heels you'll be a stick in the mud, so to speak",
  },
  {
    q: "Will there be alchohol?",
    a: "Yes, next question",
  },
  {
    q: "Will there be dinner and dancing?",
    a: "Obviously",
  },
  {
    q: "serioulsy?",
    a: "just kidding yes",
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
  width: 60%;
`;

const Question = styled.div`
  font-size: 1.4em;
  font-weight: 300;
  padding: 0.7rem 1rem;
  color: #718f94;
`;

const Answer = styled.p`
  font-size: 1em;
  padding: 1rem;
`;

const QAndA = () => {
  return (
    <Wrapper>
      <Hero goBack={true} />
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
