import { useEffect, useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useCursor } from '@react-three/drei';
import { AsciiEffect } from 'three-stdlib';
import styled from 'styled-components';

function Hero() {
    return (
        <>
            <TitleBox className="font-title text-7xl sm:text-8xl">
                <span>We are<br />HACK-X</span>
                <h2 className="my-auto text-lg font-regular flex">
                    <div style={{ width: 0, flexGrow: 1, padding: "10px 0 0 12px" }}>A cybersecurity club run and managed by students based in MITWPU, Pune.</div>
                </h2>
            </TitleBox>
            <Canvas camera={{ zoom: 3 }} style={{ zIndex: 0, height: '100vh' }}>
                <color attach="background" args={['black']} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Torusknot />
                <OrbitControls enableZoom={false} />
                <AsciiRenderer invert />
            </Canvas>
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
    const { size, gl, scene, camera } = useThree()

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

export default Hero;



const TitleBox = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  z-index: 9999999;
  top: 50%;
  transform: translateY(-50%);
  left: 100px;
  display: inline-block;

  @media (max-width: 639px) {
    left: 40px;
  }
`;
