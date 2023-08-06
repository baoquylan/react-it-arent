import React from 'react';
import { icons } from '../constant/icon.constant';


export default function Icon({ iconStyle = {}, text, url, icon }) {




    return (
        <div
            className={`icon`}
            style={{ ...iconStyle, WebkitMaskImage: `url(${icons[icon] ? icons[icon] : url})` }}
        ></div>


    );
};