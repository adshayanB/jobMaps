import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage1 from '../images/feature_1.png';
import featureimage2 from '../images/feature_2.png';
import featureimage3 from '../images/feature_3.png';

function Features() {
    return (
        <div id="features">
            <div className="a-container">
                <FeatureBox image={featureimage1} title="Track your progress." text="Organize all of your applications in one place."/>
                <FeatureBox image={featureimage2} title="Optimize your performance." text="View detailed analytics of your performance."/>
                <FeatureBox image={featureimage3} title="Improve your skills." text="Receive curated resources to successfully land an offer."/>
            </div>

        </div>
    )
}

export default Features;