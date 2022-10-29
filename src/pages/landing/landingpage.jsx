import { useEffect, useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useCursor } from '@react-three/drei' ;
import { AsciiEffect } from 'three-stdlib';
import styled from 'styled-components';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function Landing() {
  return (
    <>
        <Navbar/>
        <TitleBox>
            HACK-X
            <Subtitle>Our Concern is Security</Subtitle>
        </TitleBox>
        <Canvas camera={{ zoom:3 }} style={{ zIndex: 0, height: '100vh' }}>
            <color attach="background" args={['black']} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Torusknot />
            <OrbitControls />
            <AsciiRenderer invert />
        </Canvas>
      {/*<Footer />*/}
    </>
  );
}

function Torusknot(props) {
    const ref = useRef()
    const [clicked, click] = useState(false)
    const [hovered, hover] = useState(false)
    useCursor(hovered)
    useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta / 2))
    return (
        <mesh
            {...props}
            position={[1, 0, 0]}
            ref={ref}
            scale={clicked ? 1.5 : 1.25}
            onClick={() => click(!clicked)}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}>
            <torusKnotGeometry args={[1, 0.25, 128, 48]} />
            <meshStandardMaterial color="orange" />
        </mesh>
    )
}

function AsciiRenderer({ renderIndex = 1, characters = ' .:-+*=%@#', ...options }) {
    // Reactive state
    const {size, gl, scene, camera} = useThree()

    // Create effect
    const effect = useMemo(() => {
        const effect = new AsciiEffect(gl, characters, options)
        effect.domElement.style.position = 'absolute'
        effect.domElement.style.top = '0px'
        effect.domElement.style.left = '0px'
        effect.domElement.style.color = 'white'
        effect.domElement.style.backgroundColor = 'black'
        effect.domElement.style.pointerEvents = 'none'
        return effect
    }, [gl, options, characters])

    // Append on mount, remove on unmount
    useEffect(() => {
        gl.domElement.parentNode.appendChild(effect.domElement)
        return () => gl.domElement.parentNode.removeChild(effect.domElement)
    }, [gl, options, effect])

    // Set size
    useEffect(() => {
        effect.setSize(size.width, size.height)
    }, [effect, size])

    // Take over render-loop (that is what the index is for)
    useFrame((state) => {
        effect.render(scene, camera)
    }, renderIndex)

    // This component returns nothing, it has no view, it is a purely logical
}

export default Landing;



const TitleBox = styled.div`
  font-family: 'Mokoto', sans-serif;
  color: #c80a5a;
  position: absolute;
  margin: 0;
  padding: 0;
  z-index: 9999999;
  bottom: 200px;
  left: 100px;
  font-size: 7em;
`;

const Subtitle = styled.h2`
  font-family: 'Mokoto', sans-serif;
  color: white;
  margin: 0;
  padding: 0;
  z-index: 9999999;
  font-size: 0.3em;
`;
