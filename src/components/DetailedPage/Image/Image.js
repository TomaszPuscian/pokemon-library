import React from 'react';
import examplephoto from './zkXHImtvRUDocKkzkyoTL980AvCTDdSQ.jpg'
import {DetailedInfoElement} from "../../Styled Components/styled-components";


const Image = () => {

    return (
        <DetailedInfoElement>
            <img src={examplephoto} style={{width: 400, height: 400}} alt="example" />
        </DetailedInfoElement>
    )
}

export {Image};