import React, { useCallback, useEffect } from 'react';
import { icons } from '../constant/icon.constant';
import Icon from './Icon.gen';
import { Badge } from 'antd';


export default function TextIcon({  amountNotify = 0, active, className = '', iconStyle = {}, text, url, icon, onClick = () => { } }) {

    let activeL = active ? 'active' : ''



    return (
        <div  className={`lb-btn-text ${activeL} ${className}`} onClick={onClick} >
            {(url || icon) &&
                amountNotify !== 0 ?
                <Badge count={amountNotify} size='small' className='lb-badge' >
                    <Icon
                        iconStyle={iconStyle}
                        url={url}
                        icon={icon}
                    />
                </Badge>
                :
                <Icon
                    iconStyle={iconStyle}
                    url={url}
                    icon={icon}
                />
            }
            {text && <span>
                {text}
            </span>}
        </div>


    );
};