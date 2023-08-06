
import React from 'react';
import './scss/index.scss'
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
    <ConfigProvider
        theme={{
            token: {
                colorPrimary: '#ff963c',
            },
        }}
    >
        <BrowserRouter >
            <App />
        </BrowserRouter>
    </ConfigProvider >
);


