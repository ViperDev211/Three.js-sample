import React from 'react'
import { Col, InputNumber, Row, Slider, Select } from 'antd'

const ControlOptions = ({ setSelectedDoorModel, widthValue, setWidthValue, heightValue, setHeightValue, setDoorColor }) => {

    const handleChange = (type, value) => {
        if (type === 'model') {
            setSelectedDoorModel(value);
        } else if (type === 'width') {
            setWidthValue(value);
        } else if (type === 'height') {
            setHeightValue(value);
        } else if (type === 'color') {
            setDoorColor(value);
        }
    };

    return (
        <div>
            <h1>Controls</h1>
            <Row className='Modelselect'>
                <Col span={10}>
                    <label ><b>Select Model</b> : </label>
                </Col>
                <Col span={14}>
                    <Select
                        defaultValue="doorModel1"
                        style={{ width: 120 }}
                        onChange={(e) => handleChange('model',e)}
                        options={[
                            { value: 'doorModel1', label: 'doorModel1' },
                            { value: 'doorModel2', label: 'doorModel2' },
                            { value: 'doorModel3', label: 'doorModel3' },
                            { value: 'doorModel4', label: 'doorModel4' },
                            { value: 'heartModel', label: 'heartModel' },
                            { value: 'flagModel', label: 'flagModel' }
                        ]}
                    />
                </Col>
            </Row>
            <Row className='widthcontrol'> 
                <Col span={4}>
                    <label htmlFor=""><b>Width:</b></label>
                </Col>
                <Col span={7}>
                    <Slider
                        min={1}
                        max={200}
                        onChange={(e) => handleChange('width', e)}
                        value={typeof widthValue === 'number' ? widthValue : 0}
                    />
                </Col>
                <Col span={13}>
                    <InputNumber
                        min={1}
                        max={200}
                        style={{ margin: '0 16px' }}
                        value={widthValue}
                        onChange={(e) => handleChange('width', e)}
                    />
                </Col>
            </Row>
            <Row className='heightcontrol'> 
                <Col span={4}>
                    <label htmlFor=""><b>height:</b></label>
                </Col>
                <Col span={8}>
                    <Slider
                        min={1}
                        max={200}
                        onChange={(e) => handleChange('height', e)}
                        value={typeof heightValue === 'number' ? heightValue : 0}
                    />
                </Col>
                <Col span={10}>
                    <InputNumber
                        min={1}
                        max={200}
                        style={{ margin: '0 16px' }}
                        value={heightValue}
                        onChange={(e) => handleChange('height', e)}
                    />
                </Col>
            </Row>
            <Row className='doorColorcontrol'> 
                <Col span={7}>
                    <label htmlFor=""><b>DoorColor:</b></label>
                </Col>
                <Select
                    defaultValue="white"
                    style={{ width: 120 }}
                    onChange={(e) => handleChange('color', e)}
                    options={[
                        { value: 'white', label: 'white' },
                        { value: 'red', label: 'red' },
                        { value: 'blue', label: 'blue' },
                        { value: 'grey', label: 'grey' },
                        { value: 'brown', label: 'brown' }
                    ]}
                />
            </Row>
        </div>
    )
}

export default ControlOptions