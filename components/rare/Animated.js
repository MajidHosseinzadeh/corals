import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import styled from 'styled-components';

const MyImage = styled(motion.img)`
    width: 200px;
    height: 200px;

`

const ScrollingImage = () => {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.5], [0, 500]);
  const xRange = useTransform(scrollYProgress, [0.5, 1], [0, 1500]);

  return (
    <div style={{ height: '100%' }}>
      <div style={{ position: 'fixed', top: '20%', zIndex: 998}}>
        <MyImage
          src="/giphy.gif"
          style={{ y: yRange, x: xRange }}
        />
      </div>
    </div>
  );
};

export default ScrollingImage;