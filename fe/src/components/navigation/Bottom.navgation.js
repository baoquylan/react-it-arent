import React from 'react';

import logo from '../../img/logo'
import TextIcon from '../gen/TextIcon.gen';

export default function BottomNavigation() {



    return (
        <div className='lb-nav-bottom'>
            <div className='layout'>
                <div className='btn'>
                    <TextIcon text={'会員登録'}  className='lb-btn-nav' />
                    <TextIcon text={'運営会社'} className='lb-btn-nav' />
                    <TextIcon text={'個人情報の取扱について'}  className='lb-btn-nav' />
                    <TextIcon text={'特定商取引法に基づく表記'}  className='lb-btn-nav' />
                    <TextIcon text={'お問い合わせ'}  className='lb-btn-nav' />
                </div>

            </div>


        </div>

    );
};


