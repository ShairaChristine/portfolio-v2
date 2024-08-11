import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader.jsx";

import Island from "../models/Island";
import Sky from "../models/Sky.jsx";
import Bird from "../models/Bird.jsx";
import Plane from "../models/Plane.jsx";

{/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">POPUpz</div> 
     <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="hotpink" />
                </mesh>

                <mesh position={[-2, 0, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="lightblue" />
                </mesh>
            </Canvas> */}

const Home = () => {   
    const adjustIslandForScreenSize = () => {
        let screenScale = null
        let screenPosition = [0, -6.5, -43];
        let rotation = [0.1, 4.7, 0];

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        } else {
            screenScale = [1, 1, 1];
        }
        return [screenScale, screenPosition];
    }
    const [islandScale, islandPosition, rotation] = adjustIslandForScreenSize();
    return (
        <section className="w-full h-screen relative">
            <Canvas 
                className="w-full h-screen bg-transparent"
                camera={{ near: 0.1, far: 1000 }
            }>
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[10, 1, 1]} intensity={2}/>
                    <ambientLight intensity={0.5}/>
                    <pointLight position={[10, 10, 10]} />
                    <spotLight position={[0, 0, 0]} />
                    <hemisphereLight skyColor="#0d5197" groundColor="#8a523e" intensity={0.75}/>

                    <Sky />
                    <Bird></Bird>
                    <Island
                      position={islandPosition}
                      scale= {islandScale}
                      rotation={rotation}
                    />
                    <Plane/>
                </Suspense>
            </Canvas>
        </section>
    );
}

export default Home;