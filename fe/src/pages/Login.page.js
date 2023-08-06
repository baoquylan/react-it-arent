import React, { useEffect } from 'react';
import { Button, Form } from 'antd';
import { appStore } from '../store/App.store';
import LoginForm from '../components/forms/Login.form';
import logo from '../img/logo.png'
import { useNavigate } from 'react-router-dom';
export default function LoginPage() {
    const { setIsLoading } = appStore()
    const navigate = useNavigate()
    useEffect(() => {
        let token = localStorage.getItem('arentToken')
        if (token) {
            navigate('/')
        }
        setIsLoading(false)
    }, []);

    return (
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            <div className='lb-form-auth' >
                <div className='header'>
                    <img src={logo} width={150} />
                </div>
                <div className='body'>
                    <LoginForm />
                </div>

            </div>



        </div>

    );
};