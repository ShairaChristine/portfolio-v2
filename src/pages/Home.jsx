import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader.jsx";

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
    return (
        <section className="w-full h-screen relative">
            <Canvas 
                className="w-full h-screen bg-transparent"
                camera={{ near: 0.1, far: 1000 }
            }>
                <Suspense fallback={<Loader />}>

                </Suspense>
            </Canvas>
        </section>
    );
}

export default Home;