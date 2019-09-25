import React, { useContext, useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { GlobalContext } from '../../contexts/GlobalContextProvider';
import axios from 'axios';

const PostForm = (props) => {

    const { authContext } = useContext(GlobalContext);

    const [loading, setLoading] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                setLoading(true);

                axios.post("http://localhost:5000/api/posts", values, { headers: { "x-auth-token": authContext.token } }).then(res => {
                    props.form.resetFields();
                    message.info('Post successfully added.');
                    setLoading(false);
                }).catch(err => {
                    console.log(err)
                    setLoading(true);
                    message.info('Post Failed to added.');
                })
            }
        });
    };

    const { getFieldDecorator } = props.form;

    // if (authContext.isLogin) return <Redirect to="/" />

    return (
        <Form onSubmit={handleSubmit}
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Form.Item>
                {getFieldDecorator('post', {
                    rules: [{ required: true, message: 'Please input your post!' }],
                })(
                    <Input.TextArea cols={60} placeholder="Write your post here." />,
                )}
            </Form.Item>
            <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                icon='plus'
            >
                Post
                </Button>
        </Form>
    );
}

const WrappedPostForm = Form.create({ name: 'post-form' })(PostForm);

export default WrappedPostForm;