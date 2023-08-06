import React, { useEffect } from 'react';
import percentageImg1 from '../../../img/photo/MyRecommend-1'
import percentageImg2 from '../../../img/photo/MyRecommend-2'
import percentageImg3 from '../../../img/photo/MyRecommend-3'
import InformationCard from '../../card/Information.card';
export default function Information() {

    const moveToElement = (id) => {
        let elmntToView = document.getElementById(id);
        elmntToView.scrollIntoView();
    }
    return (

        <div style={{
            display: 'flex', width: '100%', height: '100%',
            justifyContent: 'center', alignItems: 'center',
            maxWidth: 960, flexWrap: 'wrap', gap: 48
        }}>
            <InformationCard
                img={percentageImg1}
                title={'BODY RECORD'}
                subTitle={'自分のカラダの記録'}
                onClick={moveToElement.bind(this, 'body-record')}
            />

            <InformationCard
                img={percentageImg2}
                title={'MY EXERCISE'}
                subTitle={'自分の運動の記録'}
                onClick={moveToElement.bind(this, 'exercise')}
            />

            <InformationCard
                img={percentageImg3}
                title={'MY DIARY'}
                subTitle={'自分の日記'}
                onClick={moveToElement.bind(this, 'diary')}
            />


        </div>





    );
};