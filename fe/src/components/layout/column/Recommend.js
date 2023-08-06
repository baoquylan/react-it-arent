import React, { useEffect } from 'react';

export default function Recommend() {


    return (

        <div className='lb flex center' style={{ gap: 32 }}>
            <RecommendCard title={'RECOMMENDED COLUMN'} subTitle={'オススメ'} />
            <RecommendCard title={'RECOMMENDED DIET'} subTitle={'ダイエット'} />
            <RecommendCard title={'RECOMMENDED BEAUTY'} subTitle={'美容'}  />
            <RecommendCard title={'RECOMMENDED HEALTH'} subTitle={'健康'} />

        </div>


    );
};


const RecommendCard = ({title,subTitle}) => {
    return (
        <div className='lb flex center col lb-recommend' >
            <div className='title' >{title}</div>
            <div className='divider'>_____</div>
            <div  className='sub-title' >{subTitle}</div>
        </div>
    )
}