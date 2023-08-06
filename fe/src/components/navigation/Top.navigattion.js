import React, { useCallback, useEffect, useRef, useState } from 'react';

import logo from '../../img/logo'
import TextIcon from '../gen/TextIcon.gen';
import { useLocation, useNavigate } from 'react-router-dom';
import { Badge, Popover } from 'antd';
import MenuPopup from '../popup/Menu.popup';
import { appStore } from '../../store/App.store';

export default function TopNavigation({ isGuest }) {
    let navigate = useNavigate();
    let location = useLocation()
    const {setIsMenuPopup, isMenuPopup} = appStore()

    // const ref = useRef()
    const handleMainPage = () => {
        navigate('/')
    }
    const handlePage = (type) => {
        if (isGuest) {
            navigate(`/login`)
        } else {
            navigate(`/${type}`)
        }

    }
    const handlePopup = (e) => {
        setIsMenuPopup(true)
    }



    return (
        <>
            <div className='lb-nav'>
                <div className='layout'>
                    <img id='logo' src={logo} width={120} onClick={handleMainPage} />
                    <div className='btn'>
                        <TextIcon active={location.pathname === ('/')} text={'自分の記録'} icon='note' className='lb-btn-nav' onClick={handlePage.bind(this, '')} />
                        <TextIcon active={location.pathname === ('/challenge')} text={'チャレンジ'} icon='award' className='lb-btn-nav' onClick={handlePage.bind(this, 'challenge')} />

                        <TextIcon amountNotify={1} text={'お知らせ'} icon='note' className='lb-btn-nav' />

                        <Popover               
                            visible={isMenuPopup}
                            overlayInnerStyle={{ background: 'none', padding: 0 }}
                            zIndex={100}
                            arrow={false}
                            placement='leftBottom'
                            content={
                                <div style={{ transform: 'translate(40px, 0px)' , width:'100%', height:'100%'}} >
                                    <MenuPopup />
                                </div>

                            } >
                            <TextIcon onClick={handlePopup} icon='expand' className='lb-btn-nav' />
                        </Popover>



                    </div>

                </div>


            </div>
            <div style={{ position: 'absolute', zIndex: 100 }} >

            </div>
        </>


    );
};


