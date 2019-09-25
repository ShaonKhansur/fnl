import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';
import { Redirect } from 'react-router-dom';
import { GlobalContext } from '../../contexts/GlobalContextProvider';

const Login = (props) => {

    const { authContext } = useContext(GlobalContext);

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                authContext.loginRequest(values);
            }
        });
    };

    const { getFieldDecorator } = props.form;

    if (authContext.isLogin) return <Redirect to="/" />

    return (
        <div className="login_form_wrapper">
            <Form onSubmit={handleSubmit} className="login_form">
                <h4 className="login_title">Login</h4>
                <Form.Item>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your email!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Email"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={authContext.loading}
                        className="login_form_button"
                        icon='login'
                    >
                        Log in
                    </Button>
                    Or <Link to="/registration">register now!</Link>
                </Form.Item>
            </Form>
        </div>
    );
}

const WrappedLogin = Form.create({ name: 'login' })(Login);

export default WrappedLogin;