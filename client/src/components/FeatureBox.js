import { permittedCrossDomainPolicies } from 'helmet';
import React from 'react';

function FeatureBox(props) {
    return (
        <div className="a-box">
            <div className="a-b-img">
                <img src={props.image}/>
            </div>
            <div class="s-b-text">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default FeatureBox;