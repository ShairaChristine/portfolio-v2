import React from "react";

import birdObj from "../assets/3d/bird.glb";

const Bird = () => {
    return (
        <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
        </mesh>
    );
}

export default Bird

