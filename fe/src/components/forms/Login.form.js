import React, { useEffect } from 'react';
import { message } from 'antd'
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import {
  MailOutlined, LockOutlined
} from '@ant-design/icons';
import { appStore } from '../../store/App.store';
import { requestAPI } from '../../functions/General.function';
import { loginAPI } from '../../api/Auth.api';

export default function LoginForm() {
  const { setIsLoading, isLoading } = appStore()
  const [form] = Form.useForm();
  const navigate = useNavigate()


  const onSubmit = (e) => {
    form.validateFields()
      .then(async values => {
        setIsLoading(true)

        let resAuth = await loginAPI({ email: values.email, password: values.password })
        if (resAuth) {
          if (process.env.NODE)
            localStorage.arentToken = resAuth
          else
            localStorage.arentData = resAuth
          navigate('/')
        }
        setIsLoading(false)
      })
      .catch(ex => {
        message.error(ex)
        setIsLoading(false)
      })
  };

  return (
    <div style={{ zIndex: 10000, }} >
      <Form form={form} loading={isLoading} onFinish={onSubmit} >
        <Form.Item
          name='email'
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input style={{ backgroundColor: 'transparent !important', background: 'transparent' }}
            prefix={<MailOutlined />}
            placeholder='Email'

          />
        </Form.Item>

        <Form.Item hasFeedback
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password style={{ backgroundColor: 'transparent !important', background: 'transparent' }}
            visibilityToggle={false}
            prefix={<LockOutlined />}
            placeholder='Password'

          />
        </Form.Item>


        <Button htmlType='submit' type='primary' block loading={isLoading} >Login</Button>

        <p />
        <div style={{ display: 'flex', justifyContent: 'center' }} >
          <small >
            <a >Sign up</a> if you don't have an account
          </small>
        </div>

      </Form>
    </div>

  );
};