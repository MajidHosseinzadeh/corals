import { Canvas, useThree, useFrame } from "@react-three/fiber"
import { useRef, useLayoutEffect } from "react"
import { useTransform, useScroll, useTime } from "framer-motion"
import { degreesToRadians, progress, mix } from "popmotion"
import styled from "styled-components"
import * as THREE from 'three'
const color = "#111111"


const Icosahedron = () => (
  <mesh rotation-x={0.35}>
    <icosahedronGeometry args={[1, 0]} />
    <meshBasicMaterial wireframe color={color} />
  </mesh>
)


function Scene() {
  const gl = useThree(state => state.gl)
  const { scrollYProgress } = useScroll()
  const yAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [0.001, degreesToRadians(180)]
  )
  const distance = useTransform(scrollYProgress, [0, 1], [10, 3])
  const time = useTime()

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      time.get() * 0.0005
    )
    camera.updateProjectionMatrix()
    camera.lookAt(0, 0, 0)
  })

  useLayoutEffect(() => gl.setPixelRatio(1))


  return (
      <Icosahedron />
  )
}
const MyCanvas = styled(Canvas)`
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: pixelated;
  image-rendering: optimize-contrast;
`

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
export default function App() {
  return (
    <Container>
      <MyCanvas gl={{ antialias: false }}>
        <Scene />
      </MyCanvas>
    </Container>
  )
}
