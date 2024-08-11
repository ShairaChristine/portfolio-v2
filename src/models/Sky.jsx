import { useGLTF } from "@react-three/drei";
import React from "react";

import skyScene from "../assets/3d/sky.glb";

const Sky = () => {
    const sky = useGLTF(skyScene);
    return (
        <mesh>
            <primitive object={sky.scene} position={[0, 0, 0]} scale={[1, 1, 1]} />
        {/* <sphereGeometry args={[500, 60, 40]} />
        <meshBasicMaterial attach="material" color="#87CEEB" side={2} /> */}
        </mesh>
    );
}

export default Sky;