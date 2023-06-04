import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  margin: 0;
  padding: 0;
  background: rgb(2,0,36);
  background: linear-gradient(180deg, #E1BEA5 0%, white 50%, #f5f5dc 100%); 
  background: linear-gradient(to bottom, #E1BEA5 30%, #f5f5dc 30% 50%,#E1BEA5 50% 70%, #f5f5dc 70%);

`;


function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  
  const ImageContainer = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
  max-height: 90vh;
  margin: 20px;
  background: white;
  overflow: hidden;
`;
const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  scroll-snap-align: center;
  perspective: 500px;
`;

const ImageNext = styled(Image)`
  width: 300px;
  height: 400px;
`

const MyImage = (id, width, height) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <Section>
      <ImageContainer key={id} ref={ref}>
        <ImageNext src='/footer.jpg' alt="n" width={100} height={100}/>
      </ImageContainer>
      <motion.h2 style={{ y }}>{`#00`}</motion.h2>
    </Section>
  );
};

const Progress = styled(motion.div)`
  position: fixed;
  left: 0;
  right: 0;
  height: 5px;
  background: #4091d7;
  bottom: 50px;
`;

const items = [
    { id: 1, src: "/footer.jpg", width: 200, height: 200, price: 2, },
    { id: 2, src: "/footer.jpg", width: 200, height: 200, price: 1000, },
    { id: 3, src: "/footer.jpg", width: 200, height: 200, price: 1000, },
    { id: 4, src: "/footer.jpg", width: 200, height: 200, price: 1000, },
    { id: 5, src: "/footer.jpg", width: 200, height: 200, price: 1000, },
  ];

const AnimatedScroll = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Container>
      {items.map((image) => (
        <MyImage id={image.id} alt={image.alt} src={image.src} width={image.width} height={image.height}/>
      ))}
      <Progress style={{ scaleX }} />
    </Container>
  );
};
export default AnimatedScroll;
