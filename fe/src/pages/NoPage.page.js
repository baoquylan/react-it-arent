import React, { useEffect, useState } from 'react';
import { Result, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';

function NoPage(props) {
    const navigate = useNavigate()

    const handleGoHome = () => {
        navigate('/')
    }
    return (
        <>
            <Result
                status='error'
                title='404'
                subTitle='Page Not Found.'
                extra={[
                    <div style={{ display: 'flex', justifyContent: 'center' }} >
                        <Button type='primary' key='console' onClick={handleGoHome}>Back Home</Button>
                    </div>


                ]}
            >

            </Result>

        </>

    );
}

export default (NoPage);
