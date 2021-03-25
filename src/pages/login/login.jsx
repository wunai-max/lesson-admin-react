import React, {PureComponent} from 'react';
import './login.less'
import login from './images/touxiang.jpg'
import {Form, Input, Button} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';


class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render = () => {
        return (
            <div className='login'>
                <div className='login-header'>
                    <img src={login} alt='login'/>
                    <h1>React管理后台</h1>
                </div>
                <div className='login-content'>
                    <h2>用户登录</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{remember: true}}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{required: true, whitespace:true, message: '用户名必须输入！'},
                                {min: 4, message: '用户名至少4位'},
                                {max: 12, message: '用户名最多12位'},
                                {pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字和下滑线组成'},
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="用户名"/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{required: true, message: '密码必须输入！'}]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    };

    onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
}

//默认的属性(可选)
Login.defaultProps =
    {}
;

//规定的属性(可选)
Login.propTypes =
    {}
;

export default Login;
