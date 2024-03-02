import React from 'react'
import {OrbitControls } from "@react-three/drei"

export default function CanvasEnv() {
  return (
    <group>
        <ambientLight intensity={0.7}/>
        <directionalLight position={[10, 10, 2]} intensity={2}/>
        <directionalLight position={[-10, 10, -2]} intensity={1}/>
        <OrbitControls/>
        <axesHelper args={[150, 150, 150]} />
    </group>
  )
}