import { Button, Checkbox, Form, Input, notification, Select } from 'antd';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actRegister } from '../../action'
import './register.css'



const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const openWarning = () => {
    notification.warning({
        message: 'Thông Báo :',
        description:
            'Tài khoản đã tồn tại. Vui lòng đăng nhập !',
    });
};

const openSuccess = () => {
    notification.success({
        message: 'Thông Báo :',
        description:
            'Đăng ký thành công. Vui lòng Đăng Nhập !',
    });
};


function Register(props) {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const history = useHistory();
    const users = useSelector(state => state.register)

    const onFinish = (values) => {
        if (users.length > 0) {
            var checkExist = users.find(x => x.email === values.email);
            if (!checkExist) {
                const action = actRegister(values);
                dispatch(action);
                openSuccess();
                history.push("/login")
            } else {
                openWarning();
            }
        } else {
            const action = actRegister(values);
            dispatch(action);
            openSuccess();
            history.push("/login")
        }
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="86">+84</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    return (
        <div className="container register">
            <div className="register-header">
                <h3>Register</h3>
            </div>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}

            >
                <Form.Item
                    name="username"
                    label="Username"
                    tooltip="What do you want others to call you?"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="E-mail"
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
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                {/* 
                <Form.Item
                    name="phone"
                    label="Phone Number"
                    max={9}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input
                        maxLength={10}
                        minLength={9}
                        addonBefore={prefixSelector}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item> */}

                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                    ]}
                    {...tailFormItemLayout}
                >
                    <Checkbox>
                        I have read the <a href="">agreement</a>
                    </Checkbox>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
            <div style={{ textAlign: 'center' }}>
                <h4 className='register-text'>Bạn đã có tài khoản ?
                    <Link to="/login">
                        Login
                    </Link>
                </h4>
            </div>
        </div>
    );
};

export default Register;
