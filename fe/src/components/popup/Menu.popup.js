import React from 'react';
import { icons } from '../constant/icon.constant';
import TextIcon from '../gen/TextIcon.gen';
import { appStore } from '../../store/App.store';
import { useNavigate } from 'react-router-dom';


export default function MenuPopup() {
    const {setIsMenuPopup, isMenuPopup} = appStore()
    let navigate = useNavigate();

    const handleClickMenu = (type) => {
        navigate(`${type}`)
        setIsMenuPopup(false)
    }

    return (

        <div
            className='lb flex center col lb-menu-popup'
        >
            <div className='header' >
                <div>
                    <TextIcon onClick={() => { setIsMenuPopup(false) }} icon='collapse' />
                </div>

            </div>
            <div className='container'>
                <div onClick={handleClickMenu.bind(this, '/challenge')} className='item'>自分の記録</div>
                <div className='item'>体重グラフ</div>
                <div className='item'>目標</div>
                <div className='item'>選択中のコース</div>
                <div onClick={handleClickMenu.bind(this, '/column')} className='item'>コラム一覧</div>
                <div className='item'>設定</div>
            </div>

        </div>




    );
};