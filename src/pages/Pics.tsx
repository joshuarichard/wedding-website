import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin 0 6rem 4rem 6rem;
  position: relative;

  @media only screen and (max-width: 768px) {
    margin 0 0.25rem;
  }
`;

const ImageWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    margin 0 0.25rem;
  }
`;

const Text = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  width: 80%;
  padding: 0.3rem;
`;

const Image = styled.img`
  max-width: 100%;
  width: auto;
  height: 80%;
  border-radius: 10px;
  margin: 1rem;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.02);
  }

  @media only screen and (max-width: 768px) {
    width: 90%;
    margin: 1rem;
  }
`;

const pics: {
  src: string;
  desc: string;
}[] = [
  {
    src: '/pictures/first_picture.webp',
    desc: "Josh and Claudia's first picture together",
  },
  {
    src: '/pictures/first_camping_trip.webp',
    desc: "Josh and Claudia's first camping trip",
  },
  {
    src: '/pictures/broken_leg.webp',
    desc: 'Josh breaks his leg and Claudia comforts with a funny joke',
  },
  {
    src: '/pictures/early_picture.webp',
    desc: 'Josh and Claudia having a fun time',
  },
  {
    src: '/pictures/hawaii_1.webp',
    desc: 'Josh and Claudia go to Hawaii',
  },
  {
    src: '/pictures/hawaii_2.webp',
    desc: 'Josh and Claudia go to Hawaii pt. 2',
  },
  {
    src: '/pictures/red_sox.jpeg',
    desc: 'Josh and Claudia go to the Red Sox',
  },
  {
    src: '/pictures/josh_cool.webp',
    desc: 'Josh and Claudia go to a party',
  },
  {
    src: '/pictures/london.webp',
    desc: 'Josh and Claudia go to the UK',
  },
  {
    src: '/pictures/wedding_2.jpeg',
    desc: 'Josh and Claudia go to a wedding ',
  },
  {
    src: '/pictures/claudia_tells_a_joke.webp',
    desc: 'Claudia tells another great joke! David experiments with braids',
  },
  {
    src: '/pictures/proposal.webp',
    desc: 'Very nice!',
  },
  {
    src: '/pictures/halloween_2019.webp',
    desc: 'Josh and Claudia at Halloween',
  },
  {
    src: '/pictures/christmas_2019.webp',
    desc: "Josh and Claudia's first christmas at the Elbourn house",
  },
  {
    src: '/pictures/edgar_1.webp',
    desc: "Edgar sleepin' in a blanket",
  },
  {
    src: '/pictures/yard_sale.jpeg',
    desc: 'Josh and Claudia go to a yardsale and make a purchase',
  },
  {
    src: '/pictures/edgars_birthday.webp',
    desc: 'Josh, Claudia, and friends celebrate a special birthday',
  },
  {
    src: '/pictures/desmond_1.webp',
    desc: "Desmond sittin' in a blanket",
  },
  {
    src: '/pictures/josh_bernie.webp',
    desc: "Josha and Claudia's last pre-covid event, a Bernie 2020 rally",
  },
  {
    src: '/pictures/edgar_2.webp',
    desc: "Edgar sittin' at a table",
  },
  {
    src: '/pictures/first_christmas_tree.webp',
    desc: 'Josh and Claudia buy their first Christmas tree',
  },
  {
    src: '/pictures/deck.webp',
    desc: "Josh and Claudia's vegetable garden",
  },
  {
    src: '/pictures/desmond_2.webp',
    desc: "Desmond thinkin' about something",
  },
  {
    src: '/pictures/house.webp',
    desc: "Josh and Claudia's house'",
  },
];

const Pics = () => {
  return (
    <Wrapper>
      {pics.map((p, idx) => (
        <ImageWrapper>
          <Image key={idx} src={p.src} alt={p.desc} />
          <Text>{p.desc}</Text>
        </ImageWrapper>
      ))}
    </Wrapper>
  );
};

export default Pics;
