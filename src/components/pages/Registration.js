import React, { useContext } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { GlobalContext } from '../../contexts/GlobalContextProvider';

const Registration = (props) => {

    const { userContext } = useContext(GlobalContext);

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                userContext.addUser(values);
                props.form.resetFields();
            }
        });
    };

    const { getFieldDecorator } = props.form;

    return (
        <div className="login_form_wrapper">
            <Form onSubmit={handleSubmit} className="login_form">
                <h4 className="login_title">Login</h4>
                <Form.Item>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input your name!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Name"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your email!' }],
                    })(
                        <Input
                            prefix={<Icon type="red-envelope" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Email"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('mobile', {
                        rules: [{ required: true, message: 'Please input your mobile!' }],
                    })(
                        <Input
                            prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Mobile"
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
                        loading={userContext.loading}
                        className="login_form_button"
                    >
                        Registration
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

const WrappedRegistration = Form.create({ name: 'registration' })(Registration);

export default WrappedRegistration;