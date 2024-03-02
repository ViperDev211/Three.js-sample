import React, { useState } from 'react'
import { Canvas} from "@react-three/fiber"
import { Row, Col } from 'antd'

import './style.css'

import CanvasEnv from '../../CanvasEnv';
import DoorComponents from '../../DoorComponents'
import ControlOptions from '../ControlOptions';

const ConfigPage = () => {
    const [selectedDoorModel, setSelectedDoorModel] = useState('doorModel1');
    const [widthValue, setWidthValue] = useState(70);
    const [heightValue, setHeightValue] = useState(80);
    const [doorColor, setDoorColor] = useState('white');
    

    return (
   
        <div >
            <Row className='area'>
                <Col span={6}>
                    <ControlOptions setSelectedDoorModel={setSelectedDoorModel} widthValue={widthValue} setWidthValue={setWidthValue} heightValue={heightValue} setHeightValue={setHeightValue} setDoorColor={setDoorColor} />
                </Col>
                <Col span={18}>
                    <Canvas camera={{ position: [0, 150, 200], fov: 45, near:1, far:10000, aspect: window.innerWidth / window.innerHeight}} style={{backgroundColor:'white'}}>
                        <DoorComponents color={doorColor} model={selectedDoorModel} width={widthValue} height={heightValue} />
                        <CanvasEnv/> 
                    </Canvas>
                </Col>
            </Row>
        </div>
  )
}

export default ConfigPage